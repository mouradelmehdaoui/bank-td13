import { useDispatch } from 'react-redux';
import { editUser } from '../treatments/services/authentication.service'
import HeaderActualUser from '../model/HeaderActualUser'

export default function HeaderLoggedInBase({ actualUser }: HeaderActualUser) {
  console.log('je suis dans headerBase');
    const dispatch = useDispatch();
  
    const handleEditButton = (event: any) => {

      event.preventDefault();
      dispatch(editUser({ editionMode: true }));
    };
  
    return (
      <>
        <div className="header">
          <h1>
            Welcome back
            <br />
            {actualUser.firstName} {actualUser.lastName} !
          </h1>
          <button className="edit-button" onClick={handleEditButton}>
            Edit Name
          </button>
        </div>
      </>
    );
  }
  