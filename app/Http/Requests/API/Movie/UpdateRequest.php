<?php

namespace App\Http\Requests\API\Movie;

use Illuminate\Foundation\Http\FormRequest;

class UpdateRequest extends FormRequest
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
            'title' => 'required|string',
            'description' => 'nullable|string',
            'actors' => 'nullable|string',
            'genres' => 'nullable|array',
            'release_year' => 'nullable|integer|digits:4|min:1900',
            'is_viewed' => 'nullable|boolean',
            'rating' => 'nullable|numeric',
            'image' => 'nullable|string',
        ];
    }

}
