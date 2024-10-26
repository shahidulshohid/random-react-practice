import { useState } from 'react';
import AccessLevel from './AccessLevel';
import LoadingState from './LoadingState';
import PermissionLevel from './PermissionLevel';
import PropsHandle from './PropsHandle1';
import Showbtn from './Showbtn';
import UserSataus from './UserSataus';
import MyButton from './MyButton';

const PropsHandleAll = () =>{
const username = "Shahidul islam";
const isLoggedIn = false;
const isAdmin = true;
const isShowBtn = true;
const isLoading = false;
const permissionLevel = 'error';
const [isActive, setIsActive] = useState(true);
const toggle = () =>{
    setIsActive(!isActive)
}
    return (
        <div>
            <PropsHandle isLoggedIn={isLoggedIn} username={username}></PropsHandle>
            <AccessLevel isAdmin={isAdmin}></AccessLevel>
            <Showbtn isShowBtn={isShowBtn}></Showbtn>
            <LoadingState isLoading={isLoading}></LoadingState>
            <PermissionLevel permissionLevel={permissionLevel}></PermissionLevel>
            <UserSataus isActive={isActive} toggle={toggle}></UserSataus>
            <MyButton isActive={isActive} toggle={toggle}></MyButton>
            </div>
    );
};

export default PropsHandleAll;