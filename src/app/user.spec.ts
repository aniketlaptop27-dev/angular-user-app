import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    // #region agent log
    fetch('http://127.0.0.1:7879/ingest/f499ddfd-2a03-4689-a172-4455e0b511b0',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'e52ded'},body:JSON.stringify({sessionId:'e52ded',runId:'pre-fix',hypothesisId:'H1',location:'src/app/user.spec.ts:beforeEach:start',message:'beforeEach entered',data:{describe:'UserService'},timestamp:Date.now()})}).catch(()=>{});
    // #endregion
    TestBed.configureTestingModule({});
    // #region agent log
    fetch('http://127.0.0.1:7879/ingest/f499ddfd-2a03-4689-a172-4455e0b511b0',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'e52ded'},body:JSON.stringify({sessionId:'e52ded',runId:'pre-fix',hypothesisId:'H2',location:'src/app/user.spec.ts:beforeEach:inject',message:'injecting token',data:{token:'UserService'},timestamp:Date.now()})}).catch(()=>{});
    // #endregion
    service = TestBed.inject(UserService);
    // #region agent log
    fetch('http://127.0.0.1:7879/ingest/f499ddfd-2a03-4689-a172-4455e0b511b0',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'e52ded'},body:JSON.stringify({sessionId:'e52ded',runId:'pre-fix',hypothesisId:'H3',location:'src/app/user.spec.ts:beforeEach:postInject',message:'service instance created',data:{truthy:!!service},timestamp:Date.now()})}).catch(()=>{});
    // #endregion
  });

  it('should be created', () => {
    // #region agent log
    fetch('http://127.0.0.1:7879/ingest/f499ddfd-2a03-4689-a172-4455e0b511b0',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'e52ded'},body:JSON.stringify({sessionId:'e52ded',runId:'pre-fix',hypothesisId:'H4',location:'src/app/user.spec.ts:it',message:'asserting service truthiness',data:{truthy:!!service,usersLength:service.users?.length ?? null},timestamp:Date.now()})}).catch(()=>{});
    // #endregion
    expect(service).toBeTruthy();
  });
});
