import React from 'react';

export class DummyData {

    // dummy collection
    static accessDataCollection: any = [];

    static getAccessDataCollection() {
        return this.accessDataCollection;
    }

    static createData() {
        this.accessDataCollection = [];

        // ---------------------------------------------
        // set dummy data
        for (let n = 0; n < 20; n++) {
            this.accessDataCollection.push({
                id: 'k' + n.toString(),
                // ------------------------------------------------
                propertyExample:
                    {
                        arrayExample: ['lalalala','lololo'],
                        objectExample: { solid: '#808080', light: '#80808040' },
                    },

            });
        }

    };

}
