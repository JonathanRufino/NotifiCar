echo $HOME
echo $GOOGLE_SERVICES_KEY | base64 --decode --ignore-garbage > ../android/app/google-services.json
echo $RELEASE_KEYSTORE | base64 --decode --ignore-garbage > ../android/app/release.keystore
echo $KEYSTORE_PROPERTIES | base64 --decode --ignore-garbage > ../android/keystore.properties
