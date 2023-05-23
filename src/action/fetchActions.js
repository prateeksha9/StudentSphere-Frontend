import {
  FETCH_GROUPS,
  CREATE_USER,
  SEARCH_RESULTS
} from './actionType';
import { APIurls } from '../helpers/url';

import { getFormBody } from '../helpers/utils';



export default function fetchGroups() {
  return (dispatch) => {
    const url = APIurls.fetchGroups();
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(updateGroups(data.data));
      });
  };
}

export function updateGroups(groups) {
  return {
    type: FETCH_GROUPS,
    groups,
  };
}

export function addMember(id, memberEmail) {
  console.log(id, memberEmail, "csndcjisdncisd")
  return (dispatch) => {
    // const url = APIurls.joinGroup();
    fetch(`http://localhost:8000/group/addMember`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              body: getFormBody({id, memberEmail})
            //   body: JSON.stringify(formData)
            })
              .then(response => response.json())
              .then(data => {
                // Handle the response data
                console.log(data);
              })
              .catch(error => {
                // Handle the error
                console.error(error);
              });
  };
}

export function createGroup(groupName, adminEmail) {
  return (dispatch) => {
    fetch('http://localhost:8000/group/createGroup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: getFormBody({groupName, adminEmail})
        //   body: JSON.stringify(formData)
        })
          .then(response => response.json())
          .then(data => {
            // Handle the response data
            console.log(data);
          })
          .catch(error => {
            // Handle the error
            console.error(error);
          });
  };
}

export function registerStudent(firstName, lastName, email, phoneNumber, username, education, aspiration) {
  return (dispatch) => {
    fetch('http://localhost:8000/student/addStudent', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              body: getFormBody({firstName, lastName, email, phoneNumber, username, education, aspiration})
            //   body: JSON.stringify(formData)
            })
              .then(response => response.json())
              .then(data => {
                // Handle the response data
                console.log(data);
              })
              .catch(error => {
                // Handle the error
                console.error(error);
              });
  };
}

export function searchAction(groups, searchTerm){

  const filteredItems = groups.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return {
      type: 'SEARCH_RESULTS',
      filteredItems,
    };

}



export function sendOtp(name, recepient, memberEmail) {
  return (dispatch) => {
    fetch(`http://localhost:8000/twilio/sendMessage?recepient=${recepient}&memberEmail=${memberEmail}`)
    // , {
            //   method: 'POST',
            //   headers: {
            //     'Content-Type': 'application/x-www-form-urlencoded'
            //   },
            //   body: getFormBody({name, memberEmail})
            // //   body: JSON.stringify(formData)
            // }
            
              .then(response => response.json())
              .then(data => {
                // Handle the response data
                console.log(data);
              })
              .catch(error => {
                // Handle the error
                console.error(error);
              });
  };
  }

