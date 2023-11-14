import { useDispatch } from 'react-redux';
import { editUser } from '../treatments/services/authentication.service'
import HeaderLoggedInBaseProps from '../model/HeaderLoggedInBaseProps'

export default function HeaderLoggedInBase({ actualUser }: HeaderLoggedInBaseProps) {
    const dispatch = useDispatch();
  
    const handleEditButton = (event: any) => {

      console.log('edit function header user', event);
      event.preventDefault();
      dispatch(editUser({ editionMode: true }));

      console.log(actualUser);
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
  