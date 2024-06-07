export const standardScaling = (dAge, dSex, dHeight, dWeight, dLoBp, dHiBp) =>{

    dSex = dSex === 'M'? 2 : 1;

    const age = {
        'mean': 19469.4366,
        'sd': 2467.95329
    };
    const sex = {
        'mean': 1.35036190,
        'sd': .477083264
    };
    const height = {
        'mean': 164.377981,
        'sd': 8.19249058
    };
    const weight = {
        'mean': 74.2596629,
        'sd': 14.4111620
    };
    const loBp = {
        'mean': 129.157600,
        'sd': 170.232737
    };
    const hiBp = {
        'mean': 96.8950476,
        'sd': 194.734003
    };

    const stats = [age, sex, height, weight, loBp, hiBp];
    const data = [dAge, dSex, dHeight, dWeight, dLoBp, dHiBp];

    const scaledData = data.map((x, i) => {
        return (x - stats[i].mean)/(stats[i].sd) 
    });

    console.log(scaledData);
    
    return scaledData;


};