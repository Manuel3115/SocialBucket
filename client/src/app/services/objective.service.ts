import { Injectable } from '@angular/core';
import { objectives } from "src/assets/objectives";
import { Objective } from "../interface/objective";

@Injectable({
  providedIn: 'root'
})

export class ObjectiveService {
    getObjectiveDescription(objectiveName : string) : string
    {
        for (let obejctive of objectives)
        {
            if (obejctive.name === objectiveName)
            {
                return obejctive.description;
            }
        }
        return '';
    }
}