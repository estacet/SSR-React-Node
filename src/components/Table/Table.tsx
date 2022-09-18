import React, { useContext } from "react";
//import { AppContext } from "../../shared/context/AppContext";
import style from "./Table.module.scss";
import { Link } from "react-router-dom";
import { User } from "../../types/commonTypes";

export const results: User[] = [
  {
    cell: "98767879",
    dob: {age: 41, date: "1980-12-06T23:00:22.053Z"},
    email: "mathilda.bakkejord@example.com",
    gender: "female",
    id: {name: "FN", value: "06128033295"},
    location: {
      city: "Roverud",
      coordinates: {latitude: "41.4085", longitude: "47.1958"},
      country: "Norway",
      postcode: "1201",
      state: "Oppland",
      street: {name: "Bleikøya", number: 5730},
      timezone: {description: "Bangkok, Hanoi, Jakarta", offset: "+7:00"},
    },
    login: {
      md5: "ac6dd718bc5e883fd0e0a37aca3d69ee",
      password: "hubert",
      salt: "OLqSVN9L",
      sha1: "821407c17606a23a9e1c19c922ed8b2d90d14b72",
      sha256: "4488679bcf921dbb59584881b6f1afdc5500640f79785ad29c034731cab3830a",
      username: "beautifulmeercat793",
      uuid: "a0ed91a8-da94-4bca-b971-9ca181fe436a",
    },
    name: {first: "Mathilda", last: "Bakkejord", title: "Ms"},
    nat: "NO",
    phone: "29922362",
    picture: {
      large: "https://randomuser.me/api/portraits/women/53.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/53.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/53.jpg"
    },
    registered: {age: 18, date: "2003-09-22T06:22:37.696Z"},
  },
  {
    cell: "98767879",
    dob: {age: 41, date: "1980-12-06T23:00:22.053Z"},
    email: "mathilda.bakkejord@example.com",
    gender: "female",
    id: {name: "FN", value: "06128033295"},
    location: {
      city: "Roverud",
      coordinates: {latitude: "41.4085", longitude: "47.1958"},
      country: "Ukraine",
      postcode: "1201",
      state: "Oppland",
      street: {name: "Bleikøya", number: 5730},
      timezone: {description: "Bangkok, Hanoi, Jakarta", offset: "+7:00"},
    },
    login: {
      md5: "ac6dd718bc5e883fd0e0a37aca3d69ee",
      password: "hubert",
      salt: "OLqSVN9L",
      sha1: "821407c17606a23a9e1c19c922ed8b2d90d14b72",
      sha256: "4488679bcf921dbb59584881b6f1afdc5500640f79785ad29c034731cab3830a",
      username: "beautifulmeercat793",
      uuid: "a0ed91a8-da94-4bca-b971-9ca181fe436a",
    },
    name: {first: "Mathilda", last: "Bakkejord", title: "Ms"},
    nat: "NO",
    phone: "29922362",
    picture: {
      large: "https://randomuser.me/api/portraits/women/53.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/53.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/53.jpg"
    },
    registered: {age: 18, date: "2003-09-22T06:22:37.696Z"},
  },
  {
    cell: "98767879",
    dob: {age: 41, date: "1980-12-06T23:00:22.053Z"},
    email: "mathilda.bakkejord@example.com",
    gender: "female",
    id: {name: "FN", value: "06128033295"},
    location: {
      city: "Roverud",
      coordinates: {latitude: "41.4085", longitude: "47.1958"},
      country: "France",
      postcode: "1201",
      state: "Oppland",
      street: {name: "Bleikøya", number: 5730},
      timezone: {description: "Bangkok, Hanoi, Jakarta", offset: "+7:00"},
    },
    login: {
      md5: "ac6dd718bc5e883fd0e0a37aca3d69ee",
      password: "hubert",
      salt: "OLqSVN9L",
      sha1: "821407c17606a23a9e1c19c922ed8b2d90d14b72",
      sha256: "4488679bcf921dbb59584881b6f1afdc5500640f79785ad29c034731cab3830a",
      username: "beautifulmeercat793",
      uuid: "a0ed91a8-da94-4bca-b971-9ca181fe436a",
    },
    name: {first: "Mathilda", last: "Bakkejord", title: "Ms"},
    nat: "NO",
    phone: "29922362",
    picture: {
      large: "https://randomuser.me/api/portraits/women/53.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/53.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/53.jpg"
    },
    registered: {age: 18, date: "2003-09-22T06:22:37.696Z"},
  },
  {
    cell: "98767879",
    dob: {age: 41, date: "1980-12-06T23:00:22.053Z"},
    email: "mathilda.bakkejord@example.com",
    gender: "female",
    id: {name: "FN", value: "06128033295"},
    location: {
      city: "Roverud",
      coordinates: {latitude: "41.4085", longitude: "47.1958"},
      country: "Belgium",
      postcode: "1201",
      state: "Oppland",
      street: {name: "Bleikøya", number: 5730},
      timezone: {description: "Bangkok, Hanoi, Jakarta", offset: "+7:00"},
    },
    login: {
      md5: "ac6dd718bc5e883fd0e0a37aca3d69ee",
      password: "hubert",
      salt: "OLqSVN9L",
      sha1: "821407c17606a23a9e1c19c922ed8b2d90d14b72",
      sha256: "4488679bcf921dbb59584881b6f1afdc5500640f79785ad29c034731cab3830a",
      username: "beautifulmeercat793",
      uuid: "a0ed91a8-da94-4bca-b971-9ca181fe436a",
    },
    name: {first: "Mathilda", last: "Bakkejord", title: "Ms"},
    nat: "NO",
    phone: "29922362",
    picture: {
      large: "https://randomuser.me/api/portraits/women/53.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/53.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/53.jpg"
    },
    registered: {age: 18, date: "2003-09-22T06:22:37.696Z"},
  },
  {
    cell: "98767879",
    dob: {age: 41, date: "1980-12-06T23:00:22.053Z"},
    email: "mathilda.bakkejord@example.com",
    gender: "female",
    id: {name: "FN", value: "06128033295"},
    location: {
      city: "Roverud",
      coordinates: {latitude: "41.4085", longitude: "47.1958"},
      country: "Italy",
      postcode: "1201",
      state: "Oppland",
      street: {name: "Bleikøya", number: 5730},
      timezone: {description: "Bangkok, Hanoi, Jakarta", offset: "+7:00"},
    },
    login: {
      md5: "ac6dd718bc5e883fd0e0a37aca3d69ee",
      password: "hubert",
      salt: "OLqSVN9L",
      sha1: "821407c17606a23a9e1c19c922ed8b2d90d14b72",
      sha256: "4488679bcf921dbb59584881b6f1afdc5500640f79785ad29c034731cab3830a",
      username: "beautifulmeercat793",
      uuid: "a0ed91a8-da94-4bca-b971-9ca181fe436a",
    },
    name: {first: "Mathilda", last: "Bakkejord", title: "Ms"},
    nat: "NO",
    phone: "29922362",
    picture: {
      large: "https://randomuser.me/api/portraits/women/53.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/53.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/53.jpg"
    },
    registered: {age: 18, date: "2003-09-22T06:22:37.696Z"},
  },
  {
    cell: "98767879",
    dob: {age: 41, date: "1980-12-06T23:00:22.053Z"},
    email: "mathilda.bakkejord@example.com",
    gender: "female",
    id: {name: "FN", value: "06128033295"},
    location: {
      city: "Roverud",
      coordinates: {latitude: "41.4085", longitude: "47.1958"},
      country: "Spain",
      postcode: "1201",
      state: "Oppland",
      street: {name: "Bleikøya", number: 5730},
      timezone: {description: "Bangkok, Hanoi, Jakarta", offset: "+7:00"},
    },
    login: {
      md5: "ac6dd718bc5e883fd0e0a37aca3d69ee",
      password: "hubert",
      salt: "OLqSVN9L",
      sha1: "821407c17606a23a9e1c19c922ed8b2d90d14b72",
      sha256: "4488679bcf921dbb59584881b6f1afdc5500640f79785ad29c034731cab3830a",
      username: "beautifulmeercat793",
      uuid: "a0ed91a8-da94-4bca-b971-9ca181fe436a",
    },
    name: {first: "Mathilda", last: "Bakkejord", title: "Ms"},
    nat: "NO",
    phone: "29922362",
    picture: {
      large: "https://randomuser.me/api/portraits/women/53.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/53.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/53.jpg"
    },
    registered: {age: 18, date: "2003-09-22T06:22:37.696Z"},
  },
];

export const Table: React.FC = () => {
  //const { results } = useContext(AppContext);
  return (
    <div className={style.tableWrapper}>
      <table>
        <thead className={style.tableHeader}>
        <tr>
          <th>Id</th>
          <th>Icon</th>
          <th>
            <p>User name</p>
          </th>
          <th>
            <p>Country</p>
          </th>
          <th>
            <p>Age</p>
          </th>
          <th>
            <p>Registered since:</p>
          </th>
        </tr>
        </thead>
        <tbody className={style.tableBody}>
        {results.map((user: User, index: number) => (
          <tr>
            <td className={style.tableItemLink}>
              <Link to={`/users/${user.id.value}`}>{index + 1}</Link>
            </td>
            <td>picture</td>
            <td>{user.name.first}{user.name.last}</td>
            <td>{user.location.country}</td>
            <td>{user.registered.age}</td>
            <td>{user.registered.date}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}