# Expo Camera onBarCodeScanned Inconsistent Callback

This repository demonstrates a bug in Expo's Camera component where the `onBarCodeScanned` prop's callback function doesn't always fire reliably, especially during rapid barcode scanning.  The provided solution explores a potential workaround.  The core issue seems to be related to the asynchronous nature of barcode scanning and how it interacts with Expo's Camera lifecycle.

## Bug Report

The `bug.js` file shows a basic implementation of the `Camera` component with barcode scanning.  Under typical usage and rapid scanning, the `onBarCodeScanned` callback will often fail to consistently update the UI with the newly scanned barcodes. 

## Solution

The `bugSolution.js` file offers a possible solution by using a debounce function to control the rate at which the `onBarCodeScanned` callback is invoked. This approach reduces the frequency of calls, preventing potential race conditions or overload within Expo's camera processing.