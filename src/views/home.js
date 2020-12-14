import { Fragment } from 'react';
import { Header } from '../Components/header';
import { InfoSection } from '../Components/infoSection';
import { NavBar } from '../Components/navbar';

export const Home = () => {
    return(
        <Fragment>
            <Header />
            <NavBar />
            <InfoSection section="people"/>
            <InfoSection section="planets"/>
        </Fragment>
    );
}