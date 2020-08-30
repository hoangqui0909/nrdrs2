import { Component, Input, OnChanges, ChangeDetectorRef } from '@angular/core';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
export class UserListComponent implements OnChanges {
@Input() groupFilters: Object;
@Input() searchByKeyword: string;
users: any[] = [];
filteredUsers: any[] = [];
constructor(private userService: UserService,
private ref: ChangeDetectorRef) { }
ngOnInit(): void {
this.loadUsers();
}
ngOnChanges(): void {
if (this.groupFilters) this.filterUserList(this.groupFilters, this.users);
}
filterUserList(filters: any, users: any): void {
this.filteredUsers = this.users; //Reset User List
const keys = Object.keys(filters);
const filterUser = user => {
let result = keys.map(key => {
if (!~key.indexOf('nar') 
    && !~key.indexOf('sak')
    && !~key.indexOf('sa1')
    && !~key.indexOf('sai')
    && !~key.indexOf('yam')
    && !~key.indexOf('anb')
    && !~key.indexOf('sas')
    && !~key.indexOf('kab')
    && !~key.indexOf('kar')
    && !~key.indexOf('tem')
    && !~key.indexOf('jir')
    && !~key.indexOf('tsu')
    && !~key.indexOf('sa2')
    && !~key.indexOf('cho')
    && !~key.indexOf('oro')
    && !~key.indexOf('zet')
    && !~key.indexOf('jugo')
    && !~key.indexOf('shi')
    && !~key.indexOf('kan')
    && !~key.indexOf('kib')
    ) {
if(user[key]) {
return String(user[key]).toLowerCase().startsWith(String(filters[key]).toLowerCase())
} else {
return false;
}
}
});
// To Clean Array from undefined if it is passed so the map will fill the gap with (undefined)
result = result.filter(it => it !== undefined);
// Nomal filter
if (filters['nar'] ) {
if (user['nar']) {
if (+user['nar'] <= +filters['nar']) {
result.push(true);
} else {
result.push(false);
}
} else {
result.push(false);
}
}
if (filters['sak'] ) {
if (user['sak']) {
if (+user['sak'] <= +filters['sak']) {
result.push(true);
} else {
result.push(false);
}
} else {
result.push(false);
}
}
if (filters['sa1'] ) {
  if (user['sa1']) {
  if (+user['sa1'] <= +filters['sa1']) {
  result.push(true);
  } else {
  result.push(false);
  }
  } else {
  result.push(false);
  }
  }
if (filters['sai'] ) {
if (user['sai']) {
if (+user['sai'] <= +filters['sai']) {
result.push(true);
} else {
result.push(false);
}
} else {
result.push(false);
}
}
if (filters['yam'] ) {
if (user['yam']) {
if (+user['yam'] <= +filters['yam']) {
result.push(true);
} else {
result.push(false);
}
} else {
result.push(false);
}
}
if (filters['anb'] ) {
if (user['anb']) {
if (+user['anb'] <= +filters['anb']) {
result.push(true);
} else {
result.push(false);
}
} else {
result.push(false);
}
}
if (filters['sas'] ) {
if (user['sas']) {
if (+user['sas'] <= +filters['sas']) {
result.push(true);
} else {
result.push(false);
}
} else {
result.push(false);
}
}
if (filters['kab'] ) {
if (user['kab']) {
if (+user['kab'] <= +filters['kab']) {
result.push(true);
} else {
result.push(false);
}
} else {
result.push(false);
}
}
if (filters['kar'] ) {
if (user['kar']) {
if (+user['kar'] <= +filters['kar']) {
result.push(true);
} else {
result.push(false);
}
} else {
result.push(false);
}
}
if (filters['ter'] ) {
if (user['ter']) {
if (+user['ter'] <= +filters['ter']) {
result.push(true);
} else {
result.push(false);
}
} else {
result.push(false);
}
}
//Magic filter
if (filters['jir'] ) {
  if (user['jir']) {
  if (+user['jir'] <= +filters['jir']) {
  result.push(true);
  } else {
  result.push(false);
  }
  } else {
  result.push(false);
  }
  }
  if (filters['tsu'] ) {
  if (user['tsu']) {
  if (+user['tsu'] <= +filters['tsu']) {
  result.push(true);
  } else {
  result.push(false);
  }
  } else {
  result.push(false);
  }
  }
  if (filters['sa2'] ) {
    if (user['sa2']) {
    if (+user['sa2'] <= +filters['sa2']) {
    result.push(true);
    } else {
    result.push(false);
    }
    } else {
    result.push(false);
    }
    }
  if (filters['cho'] ) {
  if (user['cho']) {
  if (+user['cho'] <= +filters['cho']) {
  result.push(true);
  } else {
  result.push(false);
  }
  } else {
  result.push(false);
  }
  }
  if (filters['oro'] ) {
  if (user['oro']) {
  if (+user['oro'] <= +filters['oro']) {
  result.push(true);
  } else {
  result.push(false);
  }
  } else {
  result.push(false);
  }
  }
  if (filters['zet'] ) {
  if (user['zet']) {
  if (+user['zet'] <= +filters['zet']) {
  result.push(true);
  } else {
  result.push(false);
  }
  } else {
  result.push(false);
  }
  }
  if (filters['jug'] ) {
  if (user['jug']) {
  if (+user['jug'] <= +filters['jug']) {
  result.push(true);
  } else {
  result.push(false);
  }
  } else {
  result.push(false);
  }
  }
  if (filters['shi'] ) {
  if (user['shi']) {
  if (+user['shi'] <= +filters['shi']) {
  result.push(true);
  } else {
  result.push(false);
  }
  } else {
  result.push(false);
  }
  }
  if (filters['kan'] ) {
  if (user['kan']) {
  if (+user['kan'] <= +filters['kan']) {
  result.push(true);
  } else {
  result.push(false);
  }
  } else {
  result.push(false);
  }
  }
  if (filters['kib'] ) {
  if (user['kib']) {
  if (+user['kib'] <= +filters['kib']) {
  result.push(true);
  } else {
  result.push(false);
  }
  } else {
  result.push(false);
  }
  }
return result.reduce((acc, cur: any) => { return acc & cur }, 1)
}
this.filteredUsers = this.users.filter(filterUser);
}
loadUsers(): void {
this.userService.fetchUsers()
.subscribe(users => this.users = users);
this.filteredUsers = this.filteredUsers.length > 0 ? this.filteredUsers : this.users;
}
}