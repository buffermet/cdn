  function procInfo(mustHaveInstance) {
    var procs = ObjC.enumerateLoadedClassesSync();
    for (var i = 0; i < Object.keys(procs).length; i++) {
      var pname = Object.keys(procs)[i];
      console.log(pname);
      var classes = procs[pname];
      for (var ii = 0; ii < classes.length; ii++) {
        if (!mustHaveInstance || ObjC.chooseSync(ObjC.classes[classes[ii]]).length > 0) {
          console.log("  ", classes[ii], "Instances:", ObjC.chooseSync(ObjC.classes[classes[ii]]).length);
          for (var iii = 0; iii < ObjC.classes[classes[ii]].$ownMethods.length; iii++) {
            console.log("    ", "\x1b[33m" + ObjC.classes[classes[ii]].$ownMethods[iii] + "\x1b[0m");
          }
        }
      }
    }
  }
procInfo(true);
  String.prototype.log = function() {
    console.log("\n" + this + "\n");
  }

  // try {
  //   /*
  //     <
  //       SBFDeviceLockOutController: 0x2811c54a0;
  //       lockedOut: YES;
  //       blocked: YES;
  //       permanentlyBlocked: YES;
  //       thermalProvider: <
  //         SBThermalController: 0x283498070;
  //         ThermalLevel: None;
  //         inSunlight: NO;
  //         hotLevel: 0;
  //         coldLevel: 0;
  //         sunLevel: 0
  //       >
  //     >
  //   */
  //   var SBFDeviceLockOutController = ObjC.chooseSync(ObjC.classes.SBFDeviceLockOutController)[0];

  //   /*
  //     <
  //       SBFUserAuthenticationController: 0x2831ab600;
  //       authState: Revoked;
  //       passcodeSet: YES
  //     > {
  //       responders = (empty);
  //       revokedAuthDate = 2563-05-24 16:30:42 +1000;
  //       assertManager = <
  //         SBFAuthenticationAssertionManager: 0x281fa43e0
  //       > {
  //         preventLockTracker = <
  //           SBFPasscodeLockTrackerForPreventLockAssertions: 0x281fa4320;
  //           assertionCount: 0
  //         >;
  //         transientTracker = <
  //           SBFPasscodeLockTrackerForTransientAssertions: 0x281fa42c0;
  //           assertionCount: 0
  //         >;
  //       };
  //     }
  //   */
  //   var SBFUserAuthenticationController = SBFDeviceLockOutController._authenticationController();

    
  //     <
  //       CSDeviceBlockViewController: 0x102ebb670
  //     > {
  //       presenter = <
  //         CSModalPresentationViewController: 0x10328dfe0
  //       >;
  //       view = <
  //         CSModalView: 0x111f09150;
  //         frame = (0 0; 375 667);
  //         autoresize = W+H;
  //         layer = <
  //           CALayer: 0x281f75780
  //         >
  //       >;
  //       appearState = UIViewControllerAppeared;
  //       presentationStyle = 2;
  //       presentationType = 2;
  //       presentationPriority = 570;
  //       presentationTransition = 0;
  //       regionProviders = {
  //         <
  //           CSModalView: 0x111f09150
  //         >;
  //       }
  //         appearance = <
  //           CSAppearance: 0x280a8d1c0;
  //           ID: <
  //             CSDeviceBlockViewController: 0x102ebb670
  //           >;
  //           transitional: NO
  //         > {
  //           backgoundStyle = Dark;
  //           legibilitySettings = <
  //             _UILegibilitySettings: 0x283bde5e0;
  //             style: Light
  //           >;
  //           components = {
  //               <
  //                 CSComponent: 0x283111180;
  //                 type: DateView;
  //                 identifier: <
  //                   CSDeviceBlockViewController: 0x102ebb670
  //                 >;
  //                 priority: 1;
  //                 hidden: NO;
  //                 alpha: 0.00;
  //                 offset: {0, 0};
  //                 flag: BSSettingFlagYes
  //                >;
  //               <
  //                 CSComponent: 0x283112800; type: StatusBar; identifier: <CSDeviceBlockViewController: 0x102ebb670>; priority: 1; hidden: NO; alpha: 0.00;
  //                 flag: BSSettingFlagNo
  //               >;
  //               <CSComponent: 0x283112200; type: ProudLock; identifier: <CSDeviceBlockViewController: 0x102ebb670>; priority: 1; hidden: YES; alpha: 0.00>;
  //               <CSComponent: 0x283112580; type: QuickActions; identifier: <CSDeviceBlockViewController: 0x102ebb670>; priority: 0; hidden: YES; alpha: 0.00>;
  //               <CSComponent: 0x283112880; type: PageControl; identifier: <CSDeviceBlockViewController: 0x102ebb670>; priority: 0; hidden: YES; alpha: 0.00>;
  //               <CSComponent: 0x283111300; type: PageContent; identifier: <CSDeviceBlockViewController: 0x102ebb670>; priority: 0; hidden: YES; alpha: 0.00>;
  //               <CSComponent: 0x283112500; type: HomeAffordance; identifier: <CSDeviceBlockViewController: 0x102ebb670>; priority: 0; hidden: YES; alpha: 0.00>;
  //           }
  //       };
  //       behavior = <
  //         CSBehavior: 0x2805b5cc0;
  //         idleTimerDuration: Inherit;
  //         idleTimerMode: Inherit;
  //         idleWarnMode: Inherit;
  //         scrollingStrategy: Inherit;
  //         notificationBehavior: Inherit;
  //         restrictedCapabilities: Siri, TouchID, Other Capability: 16, ControlCenter, Unlock;
  //         proxMode: Inherit
  //       >;
  //       presentation = <
  //         CSPresentation: 0x281e96da0;
  //         identifier: CSDeviceBlockViewController;
  //         regions: 1
  //       > {
  //         regions = {
  //           <CSRegion: 0x283bd2fa0; role: Content; extent: {{0, 0}, {375, 667}}; identifier: <CSModalView: 0x111f09150>>;
  //         }
  //       };
  //     }
    
  //   var CSDeviceBlockViewController = ObjC.chooseSync(ObjC.classes.CSDeviceBlockViewController)[0];

  //   /*
  //     <
  //       CSBehavior: 0x2805af040;
  //       idleTimerDuration: Default;
  //       idleTimerMode: Inherit;
  //       idleWarnMode: Inherit;
  //       scrollingStrategy: Inherit;
  //       notificationBehavior: Inherit;
  //       restrictedCapabilities:
  //         Siri,
  //         Camera,
  //         TouchID,
  //         Other Capability: 16,
  //         TodayCenter,
  //         ControlCenter,
  //         QuickNote,
  //         NotificationReveal,
  //         Unlock;
  //       proxMode: Inherit
  //     >
  //   */
  //   var CSDeviceBlockViewController_CSBehavior = CSDeviceBlockViewController.activeBehavior();

  //   /*
  //     {(
  //       <CSComponent: 0x283112580; type: QuickActions; identifier: <CSDeviceBlockViewController: 0x102ebb670>; priority: 0; hidden: YES; alpha: 0.00>,
  //       <CSComponent: 0x283111180; type: DateView; identifier: <CSDeviceBlockViewController: 0x102ebb670>; priority: 1; hidden: NO; alpha: 0.00; offset: {0, 0}; flag: BSSettingFlagYes>,
  //       <CSComponent: 0x283112800; type: StatusBar; identifier: <CSDeviceBlockViewController: 0x102ebb670>; priority: 1; hidden: NO; alpha: 0.00; flag: BSSettingFlagNo>,
  //       <CSComponent: 0x283112880; type: PageControl; identifier: <CSDeviceBlockViewController: 0x102ebb670>; priority: 0; hidden: YES; alpha: 0.00>,
  //       <CSComponent: 0x283111300; type: PageContent; identifier: <CSDeviceBlockViewController: 0x102ebb670>; priority: 0; hidden: YES; alpha: 0.00>,
  //       <CSComponent: 0x283112500; type: HomeAffordance; identifier: <CSDeviceBlockViewController: 0x102ebb670>; priority: 0; hidden: YES; alpha: 0.00>,
  //       <CSComponent: 0x283112200; type: ProudLock; identifier: <CSDeviceBlockViewController: 0x102ebb670>; priority: 1; hidden: YES; alpha: 0.00>
  //     )}
  //   */
  //   var CSDeviceBlockViewController_CSComponents = CSDeviceBlockViewController.components();

  //   /*
  //     <
  //       SBFMobileKeyBagState: 0x281dccf90;
  //       lockState: Locked;
  //       isEffectivelyLocked: YES;
  //       permanentlyBlocked: NO;
  //       shouldWipe: NO;
  //       recoveryRequired: NO;
  //       recoveryPossible: YES;
  //       backOffTime: 0;
  //       failedAttemptCount: 11;
  //       escrowCount: 0
  //     >
  //   */
  //   var SBFMobileKeyBag = ObjC.chooseSync(ObjC.classes.SBFMobileKeyBag)[0];
  //   var SBFMobileKeyBagState = SBFMobileKeyBag.state();

  //   /*
      
  //   */
  //   var SBLockScreenDefaults = ObjC.chooseSync(ObjC.classes.SBLockScreenDefaults)[0];
  // } catch(err) {
  //   console.error("error:", err);
  // }





/* 

mobileactivationd

*/

try {
  MobileActivationDaemon = ObjC.chooseSync(ObjC.classes.MobileActivationDaemon)[0];
  DataArk = MobileActivationDaemon.dark();

  /*
    {
      "-ActivationState" = Activated;
      "-BrickState" = 0;
      "-BuildVersion" = 17E262;
      "-CollectionLastPerformed" = 17E262;
      "-LastActivated" = 17C54;
      "-PCRTCollectionString" = "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";
      "-PCRTCollectionStringBuild" = 17E262;
      "-PCRTToken" = "ukMtH9RdSQvHzBx7FiBGr7/KcmlxX/XwoWeWnWb6IRM=";
      "-UCRTOOBLastPerformed" = 17E262;
      "-uuidString" = "26EBBACB-8F99-46B9-887A-3583FDAE7C9A";
    }
  */
  DataArk.store();

  /*
    /private/var/containers/Data/System/F3CBEAE9-C302-48F4-9987-AAA9C607E745/Library/internal/data_ark.plist
  */
  DataArk.path();
} catch(err) {
  console.error("error:", err);
}

