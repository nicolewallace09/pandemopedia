import React from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

import Auth from '../utils/auth';
import { removeStateId } from '../utils/localStorage'; 
import { useQuery, useMutation } from '@apollo/react-hooks'; // verify we have react-hooks npm
import { GET_ME } from '../utils/queries'; // need to define
import { REMOVE_STATE_SEARCH } from '../utils/mutations'; // need to build

const SavedStateSearch = () => {
  const [removeStateSearch, { error }] = useMutation(REMOVE_STATE_SEARCH); // need to build

  const { loading, data } = useQuery(GET_ME); 
  const userData = data?.me || {};

  console.log(userData);

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteStateSearch = async (stateId) => {
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await removeStateSearch({
        variables: { stateId }
      });
      console.log(data);

      if (error) {
        throw new Error('something went wrong!');
      }

      // upon success, remove book's id from localStorage
      removeStateId(stateId);
    } catch (err) {
      console.error(err);
    }
  };

  // if data isn't here yet, say so
  if (loading) {
    return <h2>LOADING...</h2>;
  }

  console.log(userData);
  

//   return (
//     <>
//       <Jumbotron fluid className='text-light bg-dark'>
//         <Container>
//           <h1>Viewing saved searches!</h1>
//         </Container>
//       </Jumbotron>
//       <Container>
//         <h2>
//           {userData.savedStateSearch.length
//             ? `Viewing ${userData.savedStateSearch.length} saved ${userData.savedStateSearch.length === 1 ? 'search' : 'search'}:`// not sure search is right in this context => verify
//             : 'You have no saved searches!'}
//         </h2>
//         <CardColumns> 
//           {userData.savedStateSearch.map((search) => {
//             return (
//               <Card key={search.searchId} border='dark'>
                
//                 <Card.Body>
//                   <Card.Title>{search.name}</Card.Title>
//                   <p className='small'>State: {search.name}</p>
//                   <Card.Text>{search.description}</Card.Text>
//                   <Button className='btn-block btn-danger' onClick={() => handleDeleteStateSearch(search.searchId)}>
//                     Delete this Search!
//                   </Button>
//                 </Card.Body>
//               </Card>
//             );
//           })}
//         </CardColumns>
//       </Container>
//     </>
//   );
};

export default SavedStateSearch;

