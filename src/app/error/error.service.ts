/**
 * Error service
 * constains error messages for each error number or default in case no match
 * use this object in error.component to apply correct error message
 *
 * v0.0.1 Dusan, 2018-01-07
 */

export const errMsg={
  "default":{
    matIco:'error',
    errNum:500,
    errMsg:{
      title:`
        500 - Failed to acomplish the task
      `,
      body:`
      <p>
        Something misterious happened on the way to this galaxy.
        While we would love to reach the destination it seems we can't.
      </p>
    `},
    nav:{
      link:"",
      func:'goBack',
    }
  },
  "401":{
    matIco:'error',
    errNum:401,
    errMsg:{
      title:`
        401 - Not authorized
      `,
      body:`
      <p>
        Something misterious happened on the way to this galaxy.
        While we would love to reach the destination it seems we can't.
      </p>
      `
    },
    nav:{
      link:"",
      func:'goBack',
    }
  },
  "403":{
    matIco:'error',
    errNum:403,
    errMsg:{
      title:`
        403 - Forbidden
      `,
      body:`
      <p>
        Something misterious happened on the way to this galaxy.
        While we would love to reach the destination it seems we can't.
      </p>
    `},
    nav:{
      link:"",
      func:null
    }
  },
  "404":{
    matIco:'error',
    errNum:404,
    errMsg:{
      title:`
        404 - page not found
      `,
      body:`
      <p>
        Something misterious happened on the way to this galaxy.
        While we would love to reach the destination it seems we can't.
      </p>
    `},
    nav:{
      link:"",
      func:null
    }
  },
  "601":{
    matIco:'error',
    errNum:601,
    errMsg:{
      title:`
        601 - Browser with limited support
      `,
      body:`
      <p>
        Unfortunatelly this internet browser does not work propperly with our app.
        Please change to one of the browsers of new generation for optimal experience.
      </p>
    `},
    nav:{
      link:"",
      func:null
    }
  }
}

/**
 * template of error message for those who like using
 * interface and want default values at the same time!
 */

 export const oErrorMessage={
  matIco:<string>"default",
  errNum:<number>500,
  errMsg:{
    title:`
      500 - Failed to acomplish the task
    `,
    body:`
    <p>
      Something misterious happened on the way to this galaxy.
      While we would love to reach the destination it seems we can't.
    </p>
  `},
  nav:{
    link:"",
    func:null
  }
}

/**
 * ErrorMessage interface defined
 */
export interface typeErrMsg{
  matIco:string;
  errNum:number;
  errMsg:{
    title:string,
    body:string
  };
  nav?:{
    link?:string,
    func?:any
    //back:boolean
  }
}
