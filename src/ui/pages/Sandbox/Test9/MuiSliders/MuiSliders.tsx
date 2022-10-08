import React from 'react';
import classesScoped from './MuiSliders.module.scss';
import classes from '../../Shared/SharedStyles.module.scss';
import Slider from '@material-ui/core/Slider';

function MuiSliders() {

    const [value1, setValue1] = React.useState<number[]>([0]);
    const [value2, setValue2] = React.useState<number[]>([0]);
    const [value3, setValue3] = React.useState<number[]>([20, 115]);
    const [value4, setValue4] = React.useState<number[]>([0]);


    const handleChangeSlider1 = (event: any, newValue: number | number[]) => {
        setValue1(newValue as number[]);
    };

    const handleChangeSlider2 = (event: any, newValue: number | number[]) => {
        setValue2(newValue as number[]);
    };

    const handleChangeSlider3 = (event: any, newValue: number | number[]) => {
        setValue3(newValue as number[]);
    };

    const handleChangeSlider4 = (event: any, newValue: number | number[]) => {
        setValue4(newValue as number[]);
    };


    return (
        <div className={classesScoped['slider-component']}>
            <div className={classes['content-row']}>
                <div className={classes['content-col-1']}>

                    <div className={classes.subtitle}>Sliders {'>'} Several Configuration Examples</div>

                    <div style={{ padding: '10px 20px 0' }}>

                        <div className={'mui-slider-custom'}>
                            <label>Continuous Slider - Basic</label>
                            <Slider
                                defaultValue={0}
                                valueLabelDisplay={'off'}
                                onChange={handleChangeSlider1}
                            />
                        </div>

                        <div className={'mui-slider-custom'}>
                            <label>Continuous Slider / Default init value applied / Value balloon label display on hover</label>
                            <Slider
                                defaultValue={20}
                                valueLabelDisplay="auto"
                                onChange={handleChangeSlider2}
                            />
                        </div>

                        <div className={'mui-slider-custom'}>
                            <label>Range Slider with steps / Marks / min-max values / Value balloon label</label>
                            <Slider
                                value={value3}
                                step={5}
                                marks
                                min={5}
                                max={225}
                                valueLabelDisplay="auto"
                                onChange={handleChangeSlider3}
                            />
                        </div>

                        <div className={'mui-slider-custom'}>
                            <label>Slider with steps / Marks / Force Value Balloon label</label>
                            <Slider
                                defaultValue={180}
                                step={20}
                                min={0}
                                max={500}
                                valueLabelDisplay="on"
                                marks
                                onChange={handleChangeSlider4}
                            />
                        </div>


                    </div>

                </div>
            </div>
        </div>
    );
}

export default MuiSliders;
