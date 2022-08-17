<?php

namespace App\Http\Requests\API\Movie;

use Illuminate\Foundation\Http\FormRequest;

class IndexRequest extends FormRequest
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
            'search' => 'nullable|string',
            'genre' => 'nullable',
            'sort_column' => 'nullable|string',
            'sort_direction' => 'nullable|string',
            'page' => 'nullable|integer',
            'viewed' => 'nullable|string',
            'years' => 'nullable|array'
        ];
    }
}
