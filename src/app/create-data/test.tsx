import axios from 'axios';

interface User {
    address: address;
    age: number;
    bank: bank;
    birthDate: string;
    bloodGroup: string;
    company: company;
    crypto: crypto;
    ein: string;
    email: string;
    eyeColor: string;
    firstName: string;
    gender: string;
    hair: {color : string; type: string;};
    height: number;
    id: number;
    image: string;
    ip: string;
    lastName: string;
    macAddress: string;
    maidenName: string;
    password: string;
    phone: string;
    role: string;
    ssn: string;
    university: string;
    userAgent: string;
    username: string;
    weight: number
}

interface address {
    address:string;
    city: string;
    coordinates: {lat: string,lng: string};
    country: string;
    postalCode: string;
    state: string;
    stateCode: string;
}

interface bank{
    cardExpire: string;
    cardNumber: string;
    cardType: string;
    currency: string;
    iban: string;
}

interface company {
    address: address;
    department: string;
    name: string;
    title: string;
}

interface crypto {
    coin: string;
    network: string;
    wallet: string;
}

interface TransformedData {
    [department: string]: {
      male: number;
      female: number;
      ageRange: string;
      hair: {
        [color: string]: number;
      };
      addressUser: {
        [user: string]: string;
      };
      bloodGroup: {
        [group: string]: number;
      }
      eye: {
        [color: string]: number;
      }
    };
  }



const department =()=> {

    const fetchAndTransformData = async () => {
        try {
          const response = await axios.get('https://dummyjson.com/users');
          const transformedData: TransformedData = {};
          const users: User[] = response.data.users;
          console.log(users)
          users.forEach((user) => {
            // สร้างกลุ่มข้อมูลตามแผนก
            if (!transformedData[user.company.department]) {
              transformedData[user.company.department] = {
                male: 0,
                female: 0,
                ageRange: '',
                hair: {},
                addressUser: {},
                bloodGroup: {},
                eye: {},
              };
            }
      
            // นับเพศ
            if (user.gender === 'male') {
              transformedData[user.company.department].male++;
            } else if (user.gender === 'female') {
              transformedData[user.company.department].female++;
            }
      
            // กลุ่มช่วงอายุ
            const ageRange = `${Math.floor(user.age / 10) * 10}-${Math.floor(user.age / 10) * 10 + 9}`;
            transformedData[user.company.department].ageRange = ageRange;
      
            // นับสีผม
            const hairColor = user.hair.color;
            if (!transformedData[user.company.department].hair[hairColor]) {
              transformedData[user.company.department].hair[hairColor] = 0;
            }
            transformedData[user.company.department].hair[hairColor]++;
      
            // เก็บข้อมูลที่อยู่
            const fullName = `${user.firstName} ${user.lastName}`;
            transformedData[user.company.department].addressUser[fullName] = user.address.address;

             // นับกรุ๊ปเลือด
            const group = user.bloodGroup;
            if (!transformedData[user.company.department].bloodGroup[group]) {
              transformedData[user.company.department].bloodGroup[group] = 0;
            }
            transformedData[user.company.department].bloodGroup[group]++;

            // นับสีตา
            const eyeColor = user.eyeColor;
            if (!transformedData[user.company.department].eye[eyeColor]) {
              transformedData[user.company.department].eye[eyeColor] = 0;
            }
            transformedData[user.company.department].eye[eyeColor]++;
          });

          return transformedData
          
        } catch (error) {
          console.error('Error fetching data:', error);
          return {};
        }
    }

    const displayTransformedData = async () => {
        const data = await fetchAndTransformData();
        console.log(data);
      };


    return displayTransformedData()
    
}

export default department;