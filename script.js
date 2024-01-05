let text = document.getElementById('text');

function handleKeyPress(event) {
  if (event.key === 'Enter') {
    startHacking();
    event.preventDefault();
  }
}


function startHacking() {
  let user = document.getElementById('input').value;

  if (user) {
    let Name_code = [
      `@4z6G&L`,
      `@ry65df`,
      `@099eri`,
      `@343uer`,
      `@9545tshs`,
      `@756perf`,
      `@5430yud`,
      `@njsf65`,
      `@543af64`,
      `@usre235`,
      `@533trys`,
      `@358purs`,
      `@6530ofs`,
      `@420sfua`
    ]
    let pass = [
      `9E*jn#h@7q`,

      `$v4z6G&L!9`,

      `3Y@uQ1^l9m`,

      `#p7R@2bX6c`,

      `$n5F&mZ*8k`,

      `2C@v#6gT!1`,

      `7Y&j#4tL*m`,

      `$p6V@3wX!5`,

      `4K@q#8jS!2`,

      `$v5M6xG*9p`,

      `6B@k#9zQ!3`,

      `$c7W#2bL*p`,

      `9H*j#6m@1q`,

      `$s4T6nX*g8`,

      `2D@v#7kG!1`,

      `7L&p#4qR*m`,

      `$w6F@3mZ!5`,

  
    ]

    let index = Math.floor(Math.random() * pass.length - 1)
    let password = pass[index]

    let i = Math.floor(Math.random() * Name_code.length - 1)
    let Usr_Name = Name_code[i]

    let arr = [
      `$------------------------- Access granted----------------------`,
      `\t\t\t\t`,
      `$-> Initializing the NITKO network.....`,
      `$-> Fetching the network got failed retrying.....`,
      `$-> Retrieving all the information.....`,
      `$-> Trying to get ${user}'s Password`,
      `$-> Password not found retrying please wait.....`,
      `$-> Password accomplishment successfull`,
      `$-> Initiating ${user}'s Facebook access.....`,
      `$-> Unable to get access retrying....`,
      `$-> Facebook username retrieving failed`,
      `$-> Facebook username is ${user}${Usr_Name}`,
      `$-> Facebook password retrieving....`,
      `$-> password Accomplished successfully`,
      `$-> Facebook password is ${password}`,
      `$-> Instagram password retrieving....`,
      `$-> Instagram password is ${password}`
    ]


    const sleep = async (sec) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(true)
        }, 1000 * sec)
      })
    }

    const HackingProg = async (cmd) => {
      await sleep(1.5)
      text.innerHTML = text.innerHTML + cmd + "<br>"
    }

    (async () => {
      for (let i = 0; i < arr.length; i++) {
        await HackingProg(arr[i])
      }
    })()
  }
  else {

    let arr = [
      `--------------->No Input ACCESS DENIED! 404-`,
      `\t\t\t\t`,
      `⚠️💀-->X-Originating-IP Failed.....`,
      `⚠️💀-->X-Forwarded-For Failed.....`,
      `⚠️💀-->Forwarded-For Failed.....`,
      `⚠️💀-->X-Remote-IP Failed.....`,
      `⚠️💀-->Client-IP Failed.....`,
      `⚠️💀-->X-ProxyUser-Ip Failed.....`,
      `⚠️💀-->Host Failed.....`,
      `⚠️💀-->error?:handle/–> HTTP 200 Denied`,
      `⚠️💀-->prog.com//;//secret –> HTTP 200 Denied`,
      `{"user_id":"<legit_id>","user_id":"<victims_id>"} (JSON Parameter Pollution)`,
      `user_id=ATTACKER_ID&user_id=VICTIM_ID (Parameter Pollution)`
    ]
    const sleep = async (sec) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(true)
        }, 1000 * sec)
      })
    }

    const HackingProg = async (cmd) => {
      await sleep(1.5)
      text.innerHTML = text.innerHTML + cmd + "<br>"
    }

    (async () => {
      for (let i = 0; i < arr.length; i++) {
        await HackingProg(arr[i])
      }
    })()
  }
}

