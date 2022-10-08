import React from 'react';
import classesScoped from './AnimationGallery.module.scss';
import classes from '../../Shared/SharedStyles.module.scss';

import UncontrolledAnimation from "../AnimationContent/UncontrolledAnimation";
import {AnimationStyle} from "../AnimationContent/AnimationStyle";


function AnimationGallery() {


    return (
        <div className={classesScoped["animations-component"]}>
            {/*gus despues acomodamos, dejo acá un par de ejemplos de animaciones
                    que me gustaría ir teniendo a mano*/}
            <div style={{display:"flex"}}>
                <UncontrolledAnimation style={AnimationStyle.ROCKET} width={200} height={200}/>
                <UncontrolledAnimation style={AnimationStyle.SUCCESS} width={200} height={200}/>
                <UncontrolledAnimation style={AnimationStyle.WARNING} width={200} height={200}/>
            </div>
            <div style={{display:"flex"}}>
                <UncontrolledAnimation style={AnimationStyle.ROCKET} width={200} height={200}/>
                <UncontrolledAnimation style={AnimationStyle.SUCCESS} width={200} height={200}/>
                <UncontrolledAnimation style={AnimationStyle.WARNING} width={200} height={200}/>
            </div>
            <div style={{display:"flex"}}>
                <UncontrolledAnimation style={AnimationStyle.ROCKET} width={200} height={200}/>
                <UncontrolledAnimation style={AnimationStyle.SUCCESS} width={200} height={200}/>
                <UncontrolledAnimation style={AnimationStyle.WARNING} width={200} height={200}/>
            </div>
            <div style={{display:"flex"}}>
                <UncontrolledAnimation style={AnimationStyle.ROCKET} width={200} height={200}/>
                <UncontrolledAnimation style={AnimationStyle.SUCCESS} width={200} height={200}/>
                <UncontrolledAnimation style={AnimationStyle.WARNING} width={200} height={200}/>
            </div>
            <div style={{display:"flex"}}>
                <UncontrolledAnimation style={AnimationStyle.ROCKET} width={200} height={200}/>
                <UncontrolledAnimation style={AnimationStyle.SUCCESS} width={200} height={200}/>
                <UncontrolledAnimation style={AnimationStyle.WARNING} width={200} height={200}/>
            </div>

        </div>
    );
}

export default AnimationGallery;
