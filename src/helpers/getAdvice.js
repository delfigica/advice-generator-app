export const getAdvice = async() => {

    const url = 'https://api.adviceslip.com/advice';
    const res = await fetch(url);
    const { slip } = await res.json()

    const advices = {
        id: slip.id,
        advice: slip.advice
    }
          
  return advices
}
