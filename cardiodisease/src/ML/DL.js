import { useState, useEffect} from "react";
import * as tf from '@tensorflow/tfjs';

const DL = ({scaledDataState}) =>{

    const [probability, setProbability] = useState(0);

    useEffect(() => {
        const loadModel = async() =>{
            try {
                const model = await tf.loadGraphModel('./DL/model.json');
                const inputTensor = tf.tensor(scaledDataState).reshape([-1, 6]);

                const prediction = model.predict(inputTensor);
                setProbability(prediction.dataSync()[0]);

            }
            catch(err){
                console.log(err);
            }
        };

        loadModel();
    }, [scaledDataState]);

    return (<div>
        <h3>The probability of you having a cardiovascular disease is {(probability * 100).toFixed(2)} %</h3>
    </div>)

};

export default DL;

