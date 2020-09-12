const StorybookWrapper = (storyFn) => (
  <YourContextProvider>
    {storyFn()}
  </YourContextProvider>
);
addDecorator(StorybookWrapper);