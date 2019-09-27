import { Application } from "express";
import endpoints from "./endpoints";
import landingCtrl from "../controllers/landing";
import {getAll, get, save, create} from "../controllers/container";
import {get as getCollectionById} from "../controllers/collection";

export default (app: Application) => {
 
    //This will return the landing page
    app.get(endpoints.LANDING_PAGE, landingCtrl);

    //This will return either a object within the container or
    //it will return a collection based on what is passed in
    app.get(endpoints.CONTAINER_ID, get);

    //This will return all of the objects within the container
    app.get(endpoints.CONTAINER, getAll);

    //This will return an object within the specified collection
    app.get(endpoints.COLLECTION_ID, getCollectionById);

    app.put(endpoints.CONTAINER_SAVE, save);

    app.post(endpoints.CONTAINER_CREATE, create);
}