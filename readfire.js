import { ref, get } from 'firebase/database';

const readUserData = async (userId) => {
  const userRef = ref(database, 'attendance/' + userId);
  const snapshot = await get(userRef);

  if (snapshot.exists()) {
    console.log(snapshot.val());
  } else {
    console.log('No data available');
  }
};

readUserData('12345');
