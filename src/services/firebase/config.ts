import firebase from '@react-native-firebase/app';

// Firebase 설정은 네이티브 레벨에서 처리됨
// iOS: GoogleService-Info.plist
// Android: google-services.json
// 이 파일은 앱에서 firebase 인스턴스 확인용

export const isFirebaseInitialized = () => {
  return firebase.apps.length > 0;
};

export default firebase;
