import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('events.db');

export const init = () => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `CREATE TABLE IF NOT EXISTS events 
                (id INTEGER PRIMARY KEY NOT NULL, 
                 title TEXT NOT NULL, 
                 description TEXT NOT NULL,
                 image TEXT NOT NULL, 
                 address TEXT NOT NULL, 
                 latitude REAL NOT NULL, 
                 longitude REAL NOT NULL )`,
                [],
                ()=> { resolve()},
                (_, err) => { reject(err)})
        })
    })

    return promise;
}

export const insertEvent = (
    title,
    description,
    image,
    address,
    lat,
    lng,
) => {
    const promise = new Promise((resolve, reject) => {
        db.transaction((tx) => {
            tx.executeSql(
                `INSERT INTO events (title, description, image, address, lat, lng)
                 VALUES (?,?,?,?,?,?)`,
                 [title,description,image,address,lat,lng],
                 (_, result) => resolve(result),
                 (_, error) => reject(error)
            )
        })
    })

    return promise
}

export const fetchEvents = () => {
    const promise = new Promise((resolve, reject) => {
      db.transaction((tx) => {
        tx.executeSql(
          'SELECT * FROM events;',
          [],
          (_, result) => resolve(result),
          (_, err) => reject(err),
        );
      });
    });
    return promise;
}

export const deleteEvent = (id) => {
    const promise = new Promise((resolve, reject) =>{
        db.transaction((tx) => {
            tx.executeSql(
                'DELETE FROM events WHERE id = ? ', 
                [id],
                (_, result) => resolve(result),
                (_, err) => reject(err),
            );
        });
    })
    return promise;
  }



