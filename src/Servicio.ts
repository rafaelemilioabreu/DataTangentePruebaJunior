class Servicio {


    getData(): Promise<any> {
        let prome = new Promise<any>((resolve, reject) => {
            fetch("https://dummyjson.com/products")
              .then((response) => response.json())
              .then((json) => {
                resolve(json);
              })
              .catch((error) => {
                reject(error);
              });
        });
        return prome;
      }
 

    
}


const servicio = new Servicio();
export default servicio;