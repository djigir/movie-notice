<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\API\Profile\UpdateRequest;
use App\Http\Resources\IndexProfileResource;
use App\Http\Resources\ShowProfileResource;
use App\Models\User;

class ProfileController extends Controller
{

    public function index()
    {
        return new IndexProfileResource(auth()->user());
    }


    public function show(User $user)
    {
        return new ShowProfileResource(auth()->user());
    }


    public function update(UpdateRequest $request, User $user)
    {
        $data = $request->validated();
        auth()->user()->update($data);

        return response('user data updated successfully', 200);
    }


    public function destroy(User $user)
    {
        auth()->user()->delete();
        return response([]);
    }
}
