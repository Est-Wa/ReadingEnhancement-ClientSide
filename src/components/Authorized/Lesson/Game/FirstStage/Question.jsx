import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button  from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";



export default function ActionAreaCard(props) {
    const { activeStep, setActiveStep, setStatus, status } = props;
    let trialNumber = 1;

    function checkAnswer(word, image) {
        if (word == image.word) {
            switch (trialNumber) {
                case (1):
                    setStatus([...status].map((s, i) => { return i == activeStep - 1 ? 'great' : s }));
                    break;
                case (2):
                    setStatus([...status].map((s, i) => { return i == activeStep - 1 ? 'ok' : s }));
                    break;
                case (3):
                    setStatus([...status].map((s, i) => { return i == activeStep - 1 ? 'pass' : s }));
                    break;
            }
            if(activeStep == 10){
                handleFinishStage(status)
            }
            setActiveStep(activeStep + 1);
        }
        else if (trialNumber == 3) {
            setStatus([...status].map((s, i) => { return i == activeStep - 1 ? 'fail' : s }));
            if(activeStep == 10){
                handleFinishStage(status)
            }
            setActiveStep(activeStep + 1);
        }
        trialNumber +=1
    }
    let handleFinishStage = props.handleFinishStage;
    let words = props.words;
    const image = props.image;
    // import imgPath from image.path;
    return (
        <Grid container
            spacing={10}>
            <Grid item >
                <Grid
                    container
                    direction="column"
                    alignItems="center">
                    <>
                        {words.map((word, index) => {
                            return (
                                <Grid item key={index} style={{ width: '100%', margin: '10px' }} >

                                    <Button variant="outlined" onClick={() => { checkAnswer(word,image) }}>{word}</Button>
                                </Grid>)
                        })}
                    </>
                </Grid>
            </Grid>
            <Grid item  >
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{
                            height: 300,
                            width: 300
                        }}
                        image={`/kiwi.jpg`}
                        alt='kiwi'
                    />
                </Card>
            </Grid>
        </Grid>
    );
}
