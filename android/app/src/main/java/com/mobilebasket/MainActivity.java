package com.mobilebasket;

import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.ReactRootView;
import com.reactnativenavigation.NavigationActivity;

public class MainActivity extends NavigationActivity {

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. There the RootView is created and
   * you can specify the renderer you wish to use - the new renderer (Fabric) or the old renderer
   * (Paper).
   */
//   @Override
//   protected ReactActivityDelegate createReactActivityDelegate() {
//     return new MainActivityDelegate(this, getMainComponentName());
//   }

//   public static class MainActivityDelegate extends ReactActivityDelegate {
//     public MainActivityDelegate(NavigationActivity activity, String mainComponentName) {
//       super(activity, mainComponentName);
//     }
//
//     @Override
//     protected ReactRootView createRootView() {
//       ReactRootView reactRootView = new ReactRootView(getContext());
//       // If you opted-in for the New Architecture, we enable the Fabric Renderer.
//       reactRootView.setIsFabric(BuildConfig.IS_NEW_ARCHITECTURE_ENABLED);
//       return reactRootView;
//     }
//
//     @Override
//     protected boolean isConcurrentRootEnabled() {
//       // If you opted-in for the New Architecture, we enable Concurrent Root (i.e. React 18).
//       // More on this on https://reactjs.org/blog/2022/03/29/react-v18.html
//       return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
//     }
//   }
}
