<?php

namespace App\Http\Requests\API\Movie;

use Illuminate\Foundation\Http\FormRequest;

class StoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'user_id' => 'integer|exists:users,id',
            'title' => 'required|string',
            'description' => 'nullable|string',
            'actors' => 'nullable|string',
            'genres' => 'nullable|array',
            'release_year' => 'nullable|integer|digits:4|min:1900',
            'is_viewed' => 'nullable|boolean',
            'rating' => 'nullable|numeric',
//            url
            'image' => 'nullable|string',
        ];
    }

}
