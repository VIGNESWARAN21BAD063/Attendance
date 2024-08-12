import { ref, set } from 'firebase/database';

const writeUserData = (userId, name, age, timing, photoUrl) => {
  set(ref(database, 'attendance/' + userId), {
    name: name,
    age: age,
    timing: timing,
    photoUrl: photoUrl
  });
};

writeUserData('12345', 'John Doe', 30, '08:00', 'path/to/photo.jpg');
