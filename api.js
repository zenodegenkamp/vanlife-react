import { initializeApp } from "firebase/app";
import { getFirestore, 
    collection, 
    doc,  
    getDocs, 
    getDoc, 
    query,
    where
} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyC1oIaHmAAL_FLNUBF20itT-IG2-fUKeIs",
  authDomain: "vanlife-59de2.firebaseapp.com",
  projectId: "vanlife-59de2",
  storageBucket: "vanlife-59de2.appspot.com",
  messagingSenderId: "812447176887",
  appId: "1:812447176887:web:f718eea1ca2dc7c9e95532"
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const vansCollectionRef = collection(db, "vans")

 
export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)
    console.log(snapshot.docs)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    console.log(vans)
    return vans
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const snapshot = await getDoc(docRef)

    console.log(snapshot.data())
    if (!snapshot.exists) {
        return null
      }

      const van = {
            ...snapshot.data(),
            id: snapshot.id
      }
    
      return van
}


export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return vans
}





// export async function getHostVans(id) {
//     const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}