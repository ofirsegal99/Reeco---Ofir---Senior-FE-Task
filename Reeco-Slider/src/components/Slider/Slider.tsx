import { useEffect, useRef, useState } from "react";
import styles from "@/components/Slider/Slider.module.css";
import RightArrow from '@/assets/RightArrow.svg?react';
import LeftArrow from '@/assets/LeftArrow.svg?react';
import { OrientationType } from "@/types/allTypes";

// Define the props for the Slider component
type SliderProps<T> = {
  numberOfItemsToShow: number; // Number of items visible at once
  orientation: OrientationType; // 'vertical' or 'horizontal'
  movementBy: string; // How much to move per scroll action (in px or item count)
  items: T[]; // Array of items to be rendered
  renderItem: (item: T) => React.ReactNode; // Function to render each item
};

const Slider = <T extends Record<string, any>>({
  numberOfItemsToShow,
  orientation,
  movementBy,
  items,
  renderItem,
}: SliderProps<T>) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerDimension, setContainerDimension] = useState(0); // The size of the container (width or height)
  const [offset, setOffset] = useState(0); // The current scroll position
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]); // Refs for each item to get dimensions

  // Update the container size and reset offset on window resize
  useEffect(() => {
    const updateSizes = () => {
      if (!containerRef.current) return;
      let newContainerDimension = 0;
      if (orientation === 'vertical') {
        newContainerDimension = containerRef.current.offsetHeight;
      } else if (orientation === 'horizontal') {
        newContainerDimension = containerRef.current.offsetWidth;
      }

      setContainerDimension(newContainerDimension);
      setOffset(0); // Reset the scroll position on resize
    };

    updateSizes(); // Set the initial sizes
    window.addEventListener("resize", updateSizes); // Recalculate sizes on resize
    return () => window.removeEventListener("resize", updateSizes); // Clean up on unmount
  }, [movementBy, items, numberOfItemsToShow, orientation]);

  // Get the dimension (width/height) of an individual item
  const getItemDimension = () => {
    if (itemRefs.current[0]) {
      if (orientation === 'vertical') return itemRefs.current[0]?.offsetHeight;
      else if (orientation === 'horizontal') return itemRefs.current[0]?.offsetWidth;
    }
    return 0;
  };

  // Parse the movementBy value and convert it into a numeric value
  const getMovementValue = () => {
    const movementValue = parseFloat(movementBy);
    return isNaN(movementValue) ? 0 : movementValue;
  };

  // Calculate the maximum offset (scroll limit) based on the number of items and container size
  const maxOffset = Math.max(0, (numberOfItemsToShow * getItemDimension()) - containerDimension);

  // Scroll to the next position
  const next = () => {
    setOffset((prev) => {
      const movementValue = getMovementValue();
      // Check if the movement is in pixels or in item count
      const movementStep = movementBy.includes('px') ? 1 : getItemDimension();
      const newOffset = prev + movementStep * movementValue;
      return Math.min(newOffset, maxOffset); // Ensure offset does not exceed the max offset
    });
  };

  // Scroll to the previous position
  const prev = () => {
    setOffset((prev) => {
      const movementValue = getMovementValue();
      // Check if the movement is in pixels or in item count
      const movementStep = movementBy.includes('px') ? 1 : getItemDimension();
      const newOffset = prev - movementStep * movementValue;
      return Math.max(newOffset, 0); // Ensure offset does not go below 0
    });
  };

  return (
    <div className={styles.Container} 
    data-orientation={orientation}>
      <button
        onClick={prev}
        data-disabled={offset === 0}
        data-orientation={orientation}
        className={styles.Button}
        disabled={offset === 0}
      >
        <LeftArrow height="3rem" />
      </button>

      <div ref={containerRef} className={styles.Slider}>
        <div
          className={styles.ItemsWrapper}
          data-orientation={orientation}
          style={{ "--offset": `-${offset}px` } as React.CSSProperties} // Passing offset as a CSS variable
        >
          {items.slice(0, numberOfItemsToShow).map((item, index) => (
            <div
              key={index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              className={styles.Item}
            >
              {renderItem(item)}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={next}
        data-disabled={offset >= maxOffset}
        data-orientation={orientation}
        className={styles.Button}
        disabled={offset >= maxOffset}
      >
        <RightArrow height="3rem" />
      </button>
    </div>
  );
};

export default Slider;
