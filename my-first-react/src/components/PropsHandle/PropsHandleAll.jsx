import AccessLevel from './AccessLevel';
import LoadingState from './LoadingState';
import PermissionLevel from './PermissionLevel';
import PropsHandle from './PropsHandle1';
import Showbtn from './Showbtn';

const PropsHandleAll = () =>{
const isLoggedIn = false;
const isAdmin = true;
const isShowBtn = true;
const isLoading = false;
const permissionLevel = 'write';
const username = "Shahidul islam";
    return (
        <div>
            <PropsHandle isLoggedIn={isLoggedIn} username={username}></PropsHandle>
            <AccessLevel isAdmin={isAdmin}></AccessLevel>
            <Showbtn isShowBtn={isShowBtn}></Showbtn>
            <LoadingState isLoading={isLoading}></LoadingState>
            <PermissionLevel permissionLevel={permissionLevel}></PermissionLevel>
            </div>
    );
};

export default PropsHandleAll;