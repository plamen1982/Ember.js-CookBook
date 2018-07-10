import { names } from './names';
import { emails } from './emails';

export default function() {
    this.namespace = '/api';

    this.get('/books', function(db, request){
      return { books : names }
    })

    this.get('/emails', function(db, request){
      return { emails: emails }
    })
}
