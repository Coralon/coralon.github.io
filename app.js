const baseUrl = "https://www.bungie.net/Platform/Destiny2";

var myHeaders = new Headers();
    myHeaders.append("X-API-KEY", "6dc7ee47a2a9493ebaeab30a8352037e");
    myHeaders.append("Cookie", "bungled=5928524535532839810; bungledid=B2ao5fhAPqVIlt50jSBiym2FNcxUBdXXCAAA; __cfduid=d0f9da0312ec66c722cdb1fb0e4de6dce1591833041");

var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
};

async function getAccount(accid) {
    try {
        const accountUrl = (`${baseUrl}/SearchDestinyPlayer/-1/${accid}/`);
        const result = await fetch(`${accountUrl}`, requestOptions);
        const data = await result.json();
        const accinfo = data.Response[0];
        console.log(`Account Name ${accinfo.displayName} has a membershipType of ${accinfo.membershipType} and a membershipId of ${accinfo.membershipId}`);
        return data;
    } catch(error) {
        console.log(error);
        alert(error);
    }

}

async function getProfile(typeid,profileid) {
    try {
        const profileUrl = (`${baseUrl}/${typeid}/Profile/${profileid}/?components=100`)
        const result = await fetch(profileUrl, requestOptions);
        const data = await result.json();
        return data;
    } catch(error) {
        console.log(error);
        alert(error);
    }

}

async function getCharacter(typeid,profileid,characterid) {
    try {
        const characterUrl = (`${baseUrl}/${typeid}/Profile/${profileid}/Character/${characterid}/?components=200`)
        const result = await fetch(characterUrl, requestOptions);
        const data = await result.json();
        return data;
    } catch(error) {
        console.log(error);
        alert(error);
    }

}

let dataAccount;
    getAccount('Coralon').then(data => {
        dataAccount = data
        console.log(dataAccount)
    });
let dataProfile;
    getProfile('1', '4611686018436709200').then(data => {
        dataProfile = data
        console.log(dataProfile)
    });
let dataCharacter;
    getCharacter('1', '4611686018436709200', '2305843009538404783').then(data => {
        dataCharacter = data
        console.log(dataCharacter)
    });