import React from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  type ScrollViewProps,
} from 'react-native';

/**
 * @interface GridComponentProps
 * Defines the props for the GridComponent.
 * It extends all props from the standard ScrollView.
 */
export interface GridComponentProps<T> extends ScrollViewProps {
  /**
   * The number of columns in the grid.
   * @default 1
   */
  columnNumber?: number;

  /**
   * An array of data to render.
   */
  data: T[];

  /**
   * A function that renders a single item.
   * @param {object} { item: T } - The item to render.
   * @returns {React.ReactNode} - The rendered component.
   */
  renderItem: (props: { item: T }) => React.ReactNode;

  /**
   * If true, the last row will be filled with empty views
   * to ensure all rows have the same number of items.
   * @default false
   */
  isFull?: boolean;

  /**
   * The maximum height of the ScrollView container.
   */
  maxHeight?: number;
}

/**
 * A grid layout component built on top of ScrollView.
 * It accepts all props from the standard ScrollView.
 */
export const GridComponent = <T extends unknown>({
  // Props specific to GridComponent
  columnNumber = 1,
  data,
  renderItem,
  isFull = false,
  maxHeight,

  // Props inherited from ScrollView
  style,
  ...rest // Collect all other ScrollViewProps into the 'rest' object
}: GridComponentProps<T>) => {
  const validColumnNumber = Math.max(1, columnNumber);
  const dataLength = data.length;

  // 1. Create a list of individual item components.
  const renderItems = [];
  // Render items from data
  for (let i = 0; i < dataLength; i++) {
    const item = data[i];
    if (item !== undefined) {
      renderItems.push(
        <View style={styles.gridContainer} key={`item-${i}`}>
          {renderItem({ item })}
        </View>
      );
    }
  }

  // If isFull is true, fill the remaining space in the last row.
  if (isFull) {
    const remainingItemsInLastRow = dataLength % validColumnNumber;
    if (remainingItemsInLastRow !== 0) {
      const spacesToFill = validColumnNumber - remainingItemsInLastRow;
      for (let i = 0; i < spacesToFill; i++) {
        renderItems.push(
          <View style={styles.gridSpaceContainer} key={`space-${i}`} />
        );
      }
    }
  }

  // 2. Group the items into rows.
  const rowRenderItems = [];
  let tempList = [];
  for (let i = 0; i < renderItems.length; i++) {
    tempList.push(renderItems[i]);

    // If the row is full or it's the last item overall.
    if ((i + 1) % validColumnNumber === 0 || i === renderItems.length - 1) {
      rowRenderItems.push(
        <View style={styles.rowContainer} key={`row-${i}`}>
          {tempList}
        </View>
      );
      // Reset the temporary list for the next row.
      tempList = [];
    }
  }

  // 3. Calculate the final style for the ScrollView container.
  const containerStyle = [
    styles.container,
    maxHeight !== undefined && { maxHeight: maxHeight },
    style, // Apply external styles passed via props.
  ];

  return (
    <ScrollView style={containerStyle} {...rest}>
      {rowRenderItems}
    </ScrollView>
  );
};

// Stylesheet for the component
const styles = StyleSheet.create({
  container: {
    // Base styles for the ScrollView itself can go here.
  },
  gridContainer: {
    // Each item should take up an equal amount of space in a row.
    flex: 1,
  },
  gridSpaceContainer: {
    // The empty spacer should also take up equal space.
    flex: 1,
  },
  rowContainer: {
    // Arrange items horizontally.
    flexDirection: 'row',
  },
});
