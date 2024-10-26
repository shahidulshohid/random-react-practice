import AccessLevel from './AccessLevel';
import LoadingState from './LoadingState';
import PropsHandle from './PropsHandle1';
import Showbtn from './Showbtn';

const PropsHandleAll = () =>{
const isLoggedIn = false;
const isAdmin = true;
const isShowBtn = true;
const isLoading = false;
const username = "Shahidul islam";
    return (
        <div>
            <PropsHandle isLoggedIn={isLoggedIn} username={username}></PropsHandle>
            <AccessLevel isAdmin={isAdmin}></AccessLevel>
            <Showbtn isShowBtn={isShowBtn}></Showbtn>
            <LoadingState isLoading={isLoading}></LoadingState>
        </div>
    );
};

export default PropsHandleAll;