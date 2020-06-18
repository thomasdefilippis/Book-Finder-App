

const Api = {
    search(author,title){
            const refinedTitle = title.replace(/\s/g, '%20')
            let link = `https://www.googleapis.com/books/v1/volumes?q=author:${author} ${refinedTitle}`;
            if(!author || author === ''){
                link = `https://www.googleapis.com/books/v1/volumes?q=${refinedTitle}`;
            }
            return fetch(link)
            .then(res => {return res.json()})
            .then(json => {
                try{
                    let arr = Object.entries(json);
                    if(arr[2][0] === "items"){
                        arr = arr[2][1];
                        return arr
                    }
                    throw new Error('Improper search');
                }catch(error){
                    let arr = [];
                    return arr;
                    console.log(error)
                }
            });
    }
};

export default Api;



