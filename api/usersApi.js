import firestore from '@react-native-firebase/firestore';

export function addUser(user, addUserComplete) {

    firestore().collection('users').add(user)
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log('Error -> ', err)
        });

}