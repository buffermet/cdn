try {
  /*
    <
      SBFDeviceLockOutController: 0x2811c54a0;
      lockedOut: YES;
      blocked: YES;
      permanentlyBlocked: YES;
      thermalProvider: <
        SBThermalController: 0x283498070;
        ThermalLevel: None;
        inSunlight: NO;
        hotLevel: 0;
        coldLevel: 0;
        sunLevel: 0
      >
    >
  */
  var SBFDeviceLockOutController = ObjC.chooseSync(ObjC.classes.SBFDeviceLockOutController)[0];

  /*
    <
      SBFUserAuthenticationController: 0x2831ab600;
      authState: Revoked;
      passcodeSet: YES
    > {
      responders = (empty);
      revokedAuthDate = 2563-05-24 16:30:42 +1000;
      assertManager = <
        SBFAuthenticationAssertionManager: 0x281fa43e0
      > {
        preventLockTracker = <
          SBFPasscodeLockTrackerForPreventLockAssertions: 0x281fa4320;
          assertionCount: 0
        >;
        transientTracker = <
          SBFPasscodeLockTrackerForTransientAssertions: 0x281fa42c0;
          assertionCount: 0
        >;
      };
    }
  */
  var SBFUserAuthenticationController = SBFDeviceLockOutController._authenticationController();

  /*
    <
      CSDeviceBlockViewController: 0x102ebb670
    > {
      presenter = <
        CSModalPresentationViewController: 0x10328dfe0
      >;
      view = <
        CSModalView: 0x111f09150;
        frame = (0 0; 375 667);
        autoresize = W+H;
        layer = <
          CALayer: 0x281f75780
        >
      >;
      appearState = UIViewControllerAppeared;
      presentationStyle = 2;
      presentationType = 2;
      presentationPriority = 570;
      presentationTransition = 0;
      regionProviders = {
        <
          CSModalView: 0x111f09150
        >;
      }
        appearance = <
          CSAppearance: 0x280a8d1c0;
          ID: <
            CSDeviceBlockViewController: 0x102ebb670
          >;
          transitional: NO
        > {
          backgoundStyle = Dark;
          legibilitySettings = <
            _UILegibilitySettings: 0x283bde5e0;
            style: Light
          >;
          components = {
              <
                CSComponent: 0x283111180;
                type: DateView;
                identifier: <
                  CSDeviceBlockViewController: 0x102ebb670
                >;
                priority: 1;
                hidden: NO;
                alpha: 0.00;
                offset: {0, 0};
                flag: BSSettingFlagYes
               >;
              <
                CSComponent: 0x283112800; type: StatusBar; identifier: <CSDeviceBlockViewController: 0x102ebb670>; priority: 1; hidden: NO; alpha: 0.00;
                flag: BSSettingFlagNo
              >;
              <CSComponent: 0x283112200; type: ProudLock; identifier: <CSDeviceBlockViewController: 0x102ebb670>; priority: 1; hidden: YES; alpha: 0.00>;
              <CSComponent: 0x283112580; type: QuickActions; identifier: <CSDeviceBlockViewController: 0x102ebb670>; priority: 0; hidden: YES; alpha: 0.00>;
              <CSComponent: 0x283112880; type: PageControl; identifier: <CSDeviceBlockViewController: 0x102ebb670>; priority: 0; hidden: YES; alpha: 0.00>;
              <CSComponent: 0x283111300; type: PageContent; identifier: <CSDeviceBlockViewController: 0x102ebb670>; priority: 0; hidden: YES; alpha: 0.00>;
              <CSComponent: 0x283112500; type: HomeAffordance; identifier: <CSDeviceBlockViewController: 0x102ebb670>; priority: 0; hidden: YES; alpha: 0.00>;
          }
      };
      behavior = <
        CSBehavior: 0x2805b5cc0;
        idleTimerDuration: Inherit;
        idleTimerMode: Inherit;
        idleWarnMode: Inherit;
        scrollingStrategy: Inherit;
        notificationBehavior: Inherit;
        restrictedCapabilities: Siri, TouchID, Other Capability: 16, ControlCenter, Unlock;
        proxMode: Inherit
      >;
      presentation = <
        CSPresentation: 0x281e96da0;
        identifier: CSDeviceBlockViewController;
        regions: 1
      > {
        regions = {
          <CSRegion: 0x283bd2fa0; role: Content; extent: {{0, 0}, {375, 667}}; identifier: <CSModalView: 0x111f09150>>;
        }
      };
    }
  */
  var CSDeviceBlockViewController = ObjC.chooseSync(ObjC.classes.CSDeviceBlockViewController)[0];

  /*
    <
      CSBehavior: 0x2805af040;
      idleTimerDuration: Default;
      idleTimerMode: Inherit;
      idleWarnMode: Inherit;
      scrollingStrategy: Inherit;
      notificationBehavior: Inherit;
      restrictedCapabilities:
        Siri,
        Camera,
        TouchID,
        Other Capability: 16,
        TodayCenter,
        ControlCenter,
        QuickNote,
        NotificationReveal,
        Unlock;
      proxMode: Inherit
    >
  */
  var CSDeviceBlockViewController_CSBehavior = CSDeviceBlockViewController.activeBehavior();

  /*
    {(
      <CSComponent: 0x283112580; type: QuickActions; identifier: <CSDeviceBlockViewController: 0x102ebb670>; priority: 0; hidden: YES; alpha: 0.00>,
      <CSComponent: 0x283111180; type: DateView; identifier: <CSDeviceBlockViewController: 0x102ebb670>; priority: 1; hidden: NO; alpha: 0.00; offset: {0, 0}; flag: BSSettingFlagYes>,
      <CSComponent: 0x283112800; type: StatusBar; identifier: <CSDeviceBlockViewController: 0x102ebb670>; priority: 1; hidden: NO; alpha: 0.00; flag: BSSettingFlagNo>,
      <CSComponent: 0x283112880; type: PageControl; identifier: <CSDeviceBlockViewController: 0x102ebb670>; priority: 0; hidden: YES; alpha: 0.00>,
      <CSComponent: 0x283111300; type: PageContent; identifier: <CSDeviceBlockViewController: 0x102ebb670>; priority: 0; hidden: YES; alpha: 0.00>,
      <CSComponent: 0x283112500; type: HomeAffordance; identifier: <CSDeviceBlockViewController: 0x102ebb670>; priority: 0; hidden: YES; alpha: 0.00>,
      <CSComponent: 0x283112200; type: ProudLock; identifier: <CSDeviceBlockViewController: 0x102ebb670>; priority: 1; hidden: YES; alpha: 0.00>
    )}
  */
  var CSDeviceBlockViewController_CSComponents = CSDeviceBlockViewController.components();

  /*
    <
      SBFMobileKeyBagState: 0x281dccf90;
      lockState: Locked;
      isEffectivelyLocked: YES;
      permanentlyBlocked: NO;
      shouldWipe: NO;
      recoveryRequired: NO;
      recoveryPossible: YES;
      backOffTime: 0;
      failedAttemptCount: 11;
      escrowCount: 0
    >
  */
  var SBFMobileKeyBag = ObjC.chooseSync(ObjC.classes.SBFMobileKeyBag)[0];
  var SBFMobileKeyBagState = SBFMobileKeyBag.state();

  /*
    
  */
  // var SBLockScreenDefaults = 
} catch(err) {
  console.error("error:", err);
}
