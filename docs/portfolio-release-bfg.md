# Big Fish SDK Release Notes

As part of my role at Big Fish, I was responsible for writing developer-focused release notes for each new version of the Big Fish SDKs. I worked closely with engineers to understand the new features, bug fixes, and 3rd party updates; standardized the presentation of the release notes; and created processes to ensure that all changes were recorded accurately.

The following is an excerpt from the release notes written for the Native iOS SDK.

---

<div style={{ textAlign: 'center' }}>

## Native iOS SDK Release Notes

</div>

Keep track of every change to the Native iOS SDK. This changelog lists all additions and updates to the Native iOS SDK, in chronological order.

### 8.3.0 (September 27, 2024) 

- Updated OpenSSL to v3.1.5001
- Updated WebP to v1.2.2
- Added arm64 simulator architecture support for the Native iOS SDK
- Updated BigFishScenePack to resolve an error in the Facebook login flow

**Upgrading to v8.3.0**

<details>
    <summary>Update 3rd Party Libraries</summary>

To upgrade **OpenSSL**, replace the openssl.xcframework with the new version.

To upgrade **WebP**:

1. In your Xcode Project, navigate to the App Target's **General** tab.
2. Find the WebP.xcframework under **Frameworks, Libraries, and Embedded Content**.
3. Select **Do Not Embed** from the dropdown on the right side.

</details>

<hr />

### 8.2.0 (May 21, 2024) 

- Added a custom new MTS event and ``bfgLog`` message to report promoted in-app purchases
- Updated Facebook SDK to v17.0.0 for the latest enhancements, optimizations, and bug fixes
- Updated Firebase SDK to v10.24.0 for the latest enhancements, optimizations, and bug fixes
- Deprecated the ``-ld64`` flag with Xcode 15, ``-ld_classic`` should be used instead

**Upgrading to v8.2.0**

<details>
  <summary>Xcode 15 Flag Deprecation</summary>

If you have ``-ld64`` flag in the **Build Settings/Other Linker Flags** of your application target, replace it with -``ld_classic``.

</details>

<details>
  <summary>Update the Facebook SDK</summary>

Update each of the following Facebook frameworks:

- FBAEMKit.xcframework
- FBSDKCoreKit_Basics.xcframework
- FBSDKCoreKit.xcframework
- FBSDKLoginKit.xcframework
- FBSDKShareKit.xcframework

Additionally, add the ``FacebookClientToken`` key to your Info.plist:

1. In the Facebook App Dashboard, open **Settings**.
2. Navigate to **Advanced**.
3. Under the **Client Token** section, add the ``FacebookClientToken`` key.

</details>

<details>
  <summary>Update the Firebase SDK</summary>

Update or add each of the following Firebase frameworks:

- FirebaseAnalytics
    - FBLPromises.xcframework
    - FirebaseAnalytics.xcframework
    - FirebaseCore.xcframework
    - FirebaseCoreInternal.xcframework
    - FirebaseInstallations.xcframework
    - GoogleAppMeasurement.xcframework
    - GoogleAppMeasurementIdentitySupport.xcframework
    - GoogleUtilities.xcframework
    - nanopb.xcframework
- FirebaseCrashlytics
    - FirebaseCoreExtension.xcframework
    - FirebaseCrashlytics.xcframework
    - FirebaseSessions.xcframework
    - Replace PromisesSwift.xcframework with Promises.xcframework
    - Run the FirebaseCrashlytics executable file
- FirebasePerformance
    - FirebaseABTesting.xcframework
    - FirebasePerformance.xcframework
    - FirebaseRemoteConfig.xcframework
    - Add FirebaseRemoteConfigInterop.xcframework
    - Add FirebaseSharedSwift.xcframework
    - GoogleDataTransport.xcframework

In Xcode:

1. Go to **General** tab.
2. Under the **Frameworks, Libraries, and Embedded Content** section:
    - Replace PromisesSwift.xcframework with Promises.xcframework.
    - Add FirebaseRemoteConfigInterop.xcframework and FirebaseSharedSwift.xcframework.
3. Navigate to the **Build Settings** tab.
    - Add ``$(SDKROOT)/usr/lib/swift`` line to the **Library Search Paths**.
    - Move it to the first line in **Library Search Paths**.

</details>

<hr />

### 8.1.0 (Jan 09, 2024) 

- Updated to Zendesk v7.0 to include chatbot support
- Added a Newsletter Opt-In checkbox for all localities alongside text updates for the checkbox and policies
- Added a new alert for players when requesting help articles or requests in Zendesk and the internet is not available 
- Added helpful debug output for ‘failed to acquire product info’ error

**Upgrading to v8.1.0**

<details>
  <summary>Update Zendesk</summary>

Remove the existing Zendesk xcframeworks from your project and replace them with the frameworks found in /frameworks/ThirdParty/Zendesk/*. It is no longer necessary to strip architectures before submitting your game to the App Store.

</details>

<details>
  <summary>Update iOS for Newsletter Opt-In</summary>

Update /Frameworks/ThirdParty/RaveSocial.xcframework and /Frameworks/Resources/BigFishScenePack.bundle with the latest version included in this release.

</details>

<hr />

### 8.0.0 (June 23, 2023) 

:::warning

The Facebook Graph API v10 will be deprecated at the end of June 2023, and you must update all calls to the Facebook Graph API before this deadline.

:::

- Updated the Facebook SDK to v11.2.1 for the latest enhancements, optimizations, and bug fixes
- Updated Zendesk to version v6.0.0, which fixes an issue where users cannot access or add an image to an existing ticket
- Updated AppsFlyerLib to v6.10.0 to support SKAdNetwork v4.0; additionally, this update fixes an issue with a double invocation of ``didResolveDeepLink`` on links based on URI scheme, and adds improved re-install detection by adding local storage.
- Updated minimum iOS version from v9.1 to v11.
- Modified the Account Deletion Request Subject to remove a duplicate instance of the word ‘Account’.

**Upgrading to v8.0.0**

<details>
  <summary>Update Facebook SDK</summary>

1. Remove the following frameworks from your project:
    - FBSDKCoreKit.framework
    - FBSDKLoginKit.framework
    - FBSDKShareKit.framework
2. Replace the removed frameworks with their xcframework files found incom.bfg.sdk/Runtime/Plugins/iOS/Extras~/XCFrameworks/Dynamic.
3. Add the FBAEMKit.xcframework and FBSDKCoreKit_Basics.xcframework from the same directory.
4. In the Unity Editor, navigate to **General > Frameworks & Libraries** and set each of the xcframeworks above to ‘Embed and sign’.

</details>

<details>
  <summary>Update AppsFlyerLib</summary>

Remove AppsFlyerLib.xcframework from your project and replace it with the new version found in the framework/ThirdParty directory.

The AppsFlyerLib xcframework can be found in com.bfg.sdk/Runtime/Plugins/iOS/Extras~/XCFrameworks/Dynamic.

</details>

<details>
  <summary>Update Zendesk libraries</summary>

1. Remove the reference to the strip-architectures script from your **Build Phases > Run Script** that points to the old Zendesk frameworks.
2. Change the minimum SDK version to 11 under the **General** Tab.
3. Remove the following old Zendesk frameworks from your project:
    - CommonUISDK.framework
    - ZendeskCoreSDK.framework
    - ZendeskProviderSDK.framework
    - ZendeskSDK.framework
4. Add the following new xcframeworks from the distribution framework/ThirdParty/Zendesk directory to your project:
    - CommonUISDK.xcframework
    - MessagingAPI.xcframework
    - MessagingSDK.xcframework
    - SDKConfigurations.xcframework
    - SupportProvidersSDK.xcframework
    - SupportSDK.xcframework
    - ZendeskCoreSDK.xcframework
5. Go to **General > Frameworks & Libraries** to set each of the xcframeworks above to **Embed and sign**.

The Zendesk xcframeworks can be found in com.bfg.sdk/Runtime/Plugins/iOS/Extras~/XCFrameworks/Dynamic.

</details>

<hr />

### 7.7.1 (June 8, 2022) 

- To comply with Apple account deletion policy, ``requestAccountDeletion()`` has been expanded to handle unauthenticated (guest) accounts.
- Removed the ``FailedForAuth`` notification, and any code that depends on this will no longer be called. We recommend that you either remove or re-write any required code that depends on the ``FailedForAuth`` notification.

---

<div style={{ textAlign: 'center'}}>

<h3> [View Portfolio](./portfolio) </h3>

</div>