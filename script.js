async function getMatchData() 
{
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=8c2bd09f-e93e-45de-b243-afe257305013&offset=0")
        .then (data => data.json())
        .then (data =>{

            if(data.status !="success")return;

            const matchlist= data.data;

            if(!matchlist) return [];

            const releventdata=matchlist.map(match => ` ${match.name}, ${match.status}`);

            //   const releventdata=matchlist.filter(match => match.series_id==" .....").map(match => ` ${match.name}, ${match.status}`);
            // for a particular series

            console.log({releventdata});

            document.getElementById("matches").innerHTML= releventdata.map(match => `<li>${match} </li>`).join('');
           
            return releventdata; 
        })

        .catch(e =>console.log(e));
}

getMatchData(); // function called to get data