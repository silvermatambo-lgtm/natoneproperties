import handler from '../api/listings.js';
import assert from 'node:assert/strict';
if(!process.env.DATABASE_URL||!process.env.ADMIN_PASSWORD) throw Error('Database or owner credential missing');
const auth='Basic '+Buffer.from('info@natoneproperties.co.za:'+process.env.ADMIN_PASSWORD).toString('base64');
async function request(method,admin,body,authorization){let code=200,data;const res={setHeader(){},status(v){code=v;return this},json(v){data=v;return this}};await handler({method,query:admin?{admin:'1'}:{},headers:{authorization},body},res);return {code,data}}
const publicResult=await request('GET',false);
assert.equal(publicResult.code,200);assert(Array.isArray(publicResult.data.listings));assert(publicResult.data.listings.every(x=>x.status==='approved'&&!Object.hasOwn(x,'contact')));
assert.equal((await request('GET',true,undefined,'Basic invalid')).code,401);
const owner=await request('GET',true,undefined,auth);assert.equal(owner.code,200);assert(Array.isArray(owner.data.listings));console.log('NAT ONE SMOKE PASS: public database read, private admin sign-in, rejected invalid sign-in, private contact fields.');