import firestore from '@react-native-firebase/firestore';

export async function addUser(user){

    await firestore().collection('users').add(user)
        .then((data) => {
            console.log(data)
        })

}

export async function getTargetedUser(queryGroup, operator, queryName){

    return await firestore().collection('users').where(queryGroup, operator, queryName).get()
        .then((data) => {
            if(!data.empty){
                //if firebase finds a matching user
                return data.docs[0]._data;
            }else{
                //if firebase DOES NOT find a matching user
                return false;
            }
        })

}