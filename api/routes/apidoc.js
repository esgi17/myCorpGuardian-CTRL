
   //---------------------------------GLOBAL APIDOC--------------------------------------//

/**
 * @apiDefine error500
 * @apiErrorExample
 *    HTTP/1.1 500 Internal Server Error
 *     {
 *       "success" : false,
 *       "status": 500,
 *       "message": "500 Internal Server Error"
 *     }
 */

 /**
  * @apiDefine error404
  * @apiErrorExample
  *    HTTP/1.1 404 Not Found
  *     {
  *       "success" : false,
  *       "status": 404,
  *       "message": "404 Not Found"
  *     }
  */

  /**
   * @apiDefine error400
   * @apiErrorExample
   *    HTTP/1.1 400 Bad Request
   *     {
   *       "success" : false,
   *       "status": 400,
   *       "message": "400 Bad Request"
   *     }
   */

   /**
   * @apiDefine searchById
   * @apiParam {Integer} id User id
   * @apiParamExample {json} Input
   *    {
   *      "id": 1
   *    }
   */


   //---------------------------------USER APIDOC--------------------------------------//

   /**
    * @apiDefine userCreated
    * @apiSuccess {Object[]} User
    * @apiSuccess {Integer} User.id User id
    * @apiSuccess {String} User.Name User name
    * @apiSuccess {Group} User.Group User group
    * @apiSuccess {Date} User.updated_at Update's date
    * @apiSuccess {Date} User.created_at Register's date
    * @apiSuccessExample {json} Success
    *    HTTP/1.1 201 OK
    *    [{
    *      "success" : true,
    *      "status" : 201,
    *      "datas" :
    *      {
    *         "id": 1,
    *         "name": "Robin",
    *         "surname" : "Tersou",
    *         "job" : "Chomeur",
    *         "group" :
    *         {
    *            "id" : 1,
    *            "name" : "Group1"
    *         }
    *         "updated_at": "2018-05-14T00:00:00.000Z",
    *         "created_at": "2018-05-14T00:00:00.000Z"
    *      }
    *    }]
    */

    /**
    * @apiDefine userExample
    * @apiParam {String} name User name
    * @apiParam {String} surname User surname
    * @apiParam {String} job User job
    * @apiParam {Integer} group_id User group_id
    * @apiParamExample {json} Input
    *    {
    *      "name": "John",
    *      "surname" : "Doe",
    *      "job" : "Host",
    *      "group_id" : 0
    *    }
    */


     //---------------------------------PASS APIDOC--------------------------------------//

     /**
      * @apiDefine passCreated
      * @apiSuccess {Object[]} Pass
      * @apiSuccess {Integer} Pass.id Pass id
      * @apiSuccess {Integer} User.id User id
      * @apiSuccess {Date} Pass.updated_at Update's date
      * @apiSuccess {Date} Pass.created_at Register's date
      * @apiSuccessExample {json} Success
      *    HTTP/1.1 201 OK
      *    [{
      *      "success" : true,
      *      "status" : 201,
      *      "datas" :
      *      {
      *         "id": 12,
      *         "user_id": 23,
      *         "updated_at": "2018-05-14T00:00:00.000Z",
      *         "created_at": "2018-05-14T00:00:00.000Z"
      *      }
      *    }]
      */

      /**
      * @apiDefine passExample
      * @apiParam {Integer} user_id Pass user_id
      * @apiParamExample {json} Input
      *    {
      *      "user_id": 7
      *    }
      */





      //---------------------------------GROUP APIDOC--------------------------------------//

      /**
       * @apiDefine groupCreated
       * @apiSuccess {Object[]} Group
       * @apiSuccess {Integer} Group.id Group id
       * @apiSuccess {String} Group.Description Group Description
       * @apiSuccess {Date} Group.updated_at Update's date
       * @apiSuccess {Date} Group.created_at Register's date
       * @apiSuccessExample {json} Success
       *    HTTP/1.1 201 OK
       *    [{
       *      "success" : true,
       *      "status" : 201,
       *      "datas" :
       *      {
       *         "id": 12,
       *         "description": "Host",
       *         "updated_at": "2018-05-14T00:00:00.000Z",
       *         "created_at": "2018-05-14T00:00:00.000Z"
       *      }
       *    }]
       */

       /**
       *  @apiDefine groupParams
       *  @apiParam {String} name Group name
       *  @apiParamExample {json} Input
       *      {
       *        "name" : "Employee"
       *      }
       */

       /**
       * @apiDefine groupExample
       * @apiParam {Integer} group_id Group id
       * @apiParamExample {json} Input
       *    {
       *      "group_id": "1"
       *    }
       */




       //---------------------------------EVENT APIDOC--------------------------------------//

       /**
        * @apiDefine eventCreated
        * @apiSuccess {Object[]} Event
        * @apiSuccess {Integer} Event.id Event id
        * @apiSuccess {Date} Event.date Event date
        * @apiSuccess {Date} Event.updated_at Update's date
        * @apiSuccess {Date} Event.created_at Register's date
        * @apiSuccessExample {json} Success
        *    HTTP/1.1 201 OK
        *    [{
        *      "success" : true,
        *      "status" : 201,
        *      "datas" :
        *      {
        *         "id": 12,
        *         "device":
        *         {
        *           "device_id":25
        *
        *         }
        *         "updated_at": "2018-05-14T00:00:00.000Z",
        *         "created_at": "2018-05-14T00:00:00.000Z"
        *      }
        *    }]
        */

        /**
        * @apiDefine eventExample
        * @apiParam {Integer} device_id Event device_id
        * @apiParamExample {json} Input
        *    {
        *      "device_id": 7
        *    }
        */





        //---------------------------------CAPTOR APIDOC--------------------------------------//

        /**
         * @apiDefine captorCreated
         * @apiSuccess {Object[]} Captor
         * @apiSuccess {Integer} Captor.id Captor id
         * @apiSuccess {String} Captor.IP Captor IP
         * @apiSuccess {String} Captor.Type Captor Type
         * @apiSuccess {String} Captor.Description Captor Description
         * @apiSuccess {Date} Captor.updated_at Update's date
         * @apiSuccess {Date} Captor.created_at Register's date
         * @apiSuccessExample {json} Success
         *    HTTP/1.1 201 OK
         *    [{
         *      "success" : true,
         *      "status" : 201,
         *      "datas" :
         *      {
         *         "id": 12,
         *         "IP": "192.168.0.29",
         *         "Type": "Cam",
         *         "description": "Caméra Hall",
         *         "updated_at": "2018-05-14T00:00:00.000Z",
         *         "created_at": "2018-05-14T00:00:00.000Z"
         *      }
         *    }]
         */

         /**
         * @apiDefine captorExample
         * @apiParam {Integer} description Captor description
         * @apiParamExample {json} Input
         *    {
         *         "IP": "192.168.0.29",
         *         "Type": "Cam",
         *         "description": "Caméra Hall"
         *    }
         */





         //---------------------------------DEVICE APIDOC--------------------------------------//

         /**
          * @apiDefine deviceCreated
          * @apiSuccess {Object[]} Device
          * @apiSuccess {Integer} Device.id Device id
          * @apiSuccess {Date} Device.updated_at Update's date
          * @apiSuccess {Date} Device.created_at Register's date
          * @apiSuccessExample {json} Success
          *    HTTP/1.1 201 OK
          *    [{
          *      "success" : true,
          *      "status" : 201,
          *      "datas" :
          *      {
          *         "id": 12,
          *         "device_type":
          *         {
          *           "id" : 3,
          *           "desciption" : camera
          *         }
          *         "updated_at": "2018-05-14T00:00:00.000Z",
          *         "created_at": "2018-05-14T00:00:00.000Z"
          *      }
          *    }]
          */

          /**
          * @apiDefine deviceExample
          * @apiParamExample {json} Input
          *    {
          *    }
          */





          //---------------------------------DEVICETYPE APIDOC--------------------------------------//

          /**
           * @apiDefine deviceTypeCreated
           * @apiSuccess {Object[]} DeviceType
           * @apiSuccess {Integer} DeviceType.id DeviceType id
           * @apiSuccess {Date} DeviceType.updated_at Update's date
           * @apiSuccess {Date} DeviceType.created_at Register's date
           * @apiSuccessExample {json} Success
           *    HTTP/1.1 201 OK
           *    [{
           *      "success" : true,
           *      "status" : 201,
           *      "datas" :
           *      {
           *         "id": 12,
           *         "name": "Caméra"
           *         "updated_at": "2018-05-14T00:00:00.000Z",
           *         "created_at": "2018-05-14T00:00:00.000Z"
           *      }
           *    }]
           */

           /**
           * @apiDefine deviceTypeExample
           * @apiParamExample {json} Input
           *    {
           *         "name": "Caméra"
           *    }
           */






           //---------------------------------DOOR APIDOC--------------------------------------//

           /**
            * @apiDefine doorCreated
            * @apiSuccess {Object[]} Door
            * @apiSuccess {Integer} Door.id Door id
            * @apiSuccess {String} Door.name Door name
            * @apiSuccess {String} Door.ref Door ref
            * @apiSuccess {Date} Door.updated_at Update's date
            * @apiSuccess {Date} Door.created_at Register's date
            * @apiSuccessExample {json} Success
            *    HTTP/1.1 201 OK
            *    [{
            *      "success" : true,
            *      "status" : 201,
            *      "datas" :
            *      {
            *         "id": 12,
            *         "name": "Porte 4 hall entrée",
            *         "ref": "235463HFTR7850",
            *         "updated_at": "2018-05-14T00:00:00.000Z",
            *         "created_at": "2018-05-14T00:00:00.000Z"
            *      }
            *    }]
            */

            /**
            * @apiDefine doorExample
            * @apiParam {Integer} description Door description
            * @apiParamExample {json} Input
            *    {
            *         "name": "Porte 4 hall entrée",
            *         "ref": "235463HFTR7850"
            *    }
            */






            //---------------------------------SCHEDULE APIDOC--------------------------------------//

            /**
             * @apiDefine scheduleCreated
             * @apiSuccess {Object[]} Schedule
             * @apiSuccess {Integer} Schedule.id Schedule id
             * @apiSuccess {Time} Schedule.h_start Schedule h_start
             * @apiSuccess {Time} Schedule.h_stop Schedule h_stop
             * @apiSuccess {Integer} Schedule.day Schedule day
             * @apiSuccess {Integer} Group.id Group id
             * @apiSuccess {Integer} Door.id Door id
             * @apiSuccess {Date} Schedule.updated_at Update's date
             * @apiSuccess {Date} Schedule.created_at Register's date
             * @apiSuccessExample {json} Success
             *    HTTP/1.1 201 OK
             *    [{
             *      "success" : true,
             *      "status" : 201,
             *      "datas" :
             *      {
             *         "id": 12,
             *         "h_start": "10:00:00.0000",
             *         "h_stop" : "19:00:00.0000",
             *         "day": 4,
             *         "group_id": 2,
             *         "door_id": 13,
             *         "updated_at": "2018-05-14T00:00:00.000Z",
             *         "created_at": "2018-05-14T00:00:00.000Z"
             *      }
             *    }]
             */

             /**
             * @apiDefine scheduleExample
             * @apiParam {Integer} description Schedule description
             * @apiParamExample {json} Input
             *    {
             *         "h_start": "10:00:00.0000",
             *         "h_stop" : "19:00:00.0000",
             *         "day": 4,
             *         "group_id": 2,
             *         "door_id": 13
             *    }
             */
