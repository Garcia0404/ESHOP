export const slider = {
  initial:{
    x:'100%'
  },
  enter:{
    x:'0',
    transition:{
      duration:0.2,
      ease:[0.76, 0, 0.24, 1]
    }
  },
  exit:{
    x:'100%',
    transition:{
      duration:0.2,
      ease:[0.76, 0, 0.24, 1]
    }
  }
}
export const removeItemCart = {
  initial:{
    opacity:0
  },
  enter:{
    opacity:1,
  },
  exit:{
    opacity:0,
  }
}