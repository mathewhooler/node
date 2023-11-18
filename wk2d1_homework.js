const album1 = {
    title: 'Talking Heads',
    albumDetails: {
      released: new Date('September 16, 1977'),
      label: 'Sire',
      formats: ['LP']
    }
  };
  
         // Exercise 1:  Update the title property of album1 from 'Talking Heads' to 'Talking Heads - 77', then assign that property to a variable named title
  
album1.title = 'Talking Heads - 77'
let title = (album1.title)

         //let title = (album1.title = 'Talking Heads - 77') ** This was another way that I found you could do it **

 console.log(title)
//================================================================================================================================================================

  
          // Exercise 2: Assign the string 'Sire' from album1 to a variable named label
  
  
  let label = album1.albumDetails.label

console.log(label)
//================================================================================================================================================================


  const album2 = {
    title: 'More Songs About Buildings and Food',
    albumDetails: {
      released: new Date('July 14, 1978'),
      label: 'Sire',
      formats: ['LP', '8-track']
    }
  };
  
  const album3 = {
    title: 'Fear of Music',
    albumDetails: {
      released: 'August 3, 1979',
      label: 'Sire',
      formats: ['Cassette']
    }
  };
  
          // Exercise 3: Accessing the string 'LP' from album2's formats array, add it to the end of album3's formats array.


  let albumFormats = album2.albumDetails.formats[0]
console.log(albumFormats)

  album3.albumDetails.formats.push(albumFormats)
  

  //================================================================================================================================================================ 
  
  
  
  // Exercise 4:  Update the released property of album3 from a string into a Date object using that string
  
  let date = new Date(album3.albumDetails.released);
  let formattedDate = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
  console.log(formattedDate);
  

  // let albumDate = album3.albumDetails.released

  // let stringDate = new Date(albumDate)


 //console.log(album3)
 //================================================================================================================================================================  
  
  const album4 = {
    title: 'Remain in Light',
    albumDetails: {
      released: new Date('October 8, 1980'),
      formats: ['Cassette', 'LP']
    }
  };
  // Exercise 5:  Add a property named label with the value 'Sire' to album4's albumDetails property
  
album4.albumDetails.label = 'Sire'

console.log(album4.albumDetails.label)
  
 //================================================================================================================================================================  
  const album5 = {
    title: 'Little Creatures',
    albumDetails: {
      released: new Date('June 10, 1985'),
      labels: ['Sire', 'emi'],
      formats: ['CD', 'cassette', 'LP']
    }
  };
  
  // Exercise 6:  Update the value 'emi' within album5's labels array to 'EMI'

  //    **    album5.albumDetails.labels.splice(1,1,'EMI')

  //    **    album5.albumDetails.labels[1]=album5.albumDetails.labels[1].toUpperCase()

  album5.albumDetails.labels[1]='EMI'


console.log(album5.albumDetails.labels)

//================================================================================================================================================================ 
  
  
  
  const album6 = {
    title: 'True Stories',
    albumDetails: {
      released: new Date('October 7, 1986'),
      labels: ['Sire, EMI'],
      formats: ['CD', 'cassette', 'LP']
    }
  };
  
  // Exercise 7:  Assign album6's formats array to a variable named formats

  let formats = album6.albumDetails.formats

  

  console.log(formats)

  //================================================================================================================================================================ 
  
  
  
  const album7 = {
    title: 'Naked',
    albumDetails: {
      released: new Date('March 15, 1988'),
      labels: ['Sire', 'EMI'],
      formats: ['CD', 'cassette', 'LP']
    }
  };
  
  const talkingHeadsAlbums = [
    album1,
    album2,
    album3,
    album4,
    album5,
    album6,
    album7
  ];
  
  // Exercise 8:  Using the talkingHeadsAlbums array, assign album5's labels property to a variable named labels

let labels = album5.albumDetails.labels

console.log(labels)

//================================================================================================================================================================ 

  
  
  // Exercise 9:  Using the talkingHeadsAlbums array, assign album7's released property to album6's released property
  
  let date7 = new Date(album7.albumDetails.released);
  let formattedDate7 = (date7.getMonth() + 1) + "/" + date7.getDate() + "/" + date7.getFullYear();
  console.log(formattedDate7);

  
  // album6.albumDetails.released = album7.albumDetails.released;
  
  // console.log(album6.albumDetails.released)
  
//================================================================================================================================================================ 


  //  Exercise 10:  Using the pre-defined variable named albumIdx below, 
  //  assign the albumDetails object of the album located within the talkingHeadsAlbums
  //  array at the index represented by the value of albumIdx to a variable named albumDetails
  
let albumIdx = 4;
let albumDetails = talkingHeadsAlbums[albumIdx].albumDetails
console.log(albumDetails);




  
  