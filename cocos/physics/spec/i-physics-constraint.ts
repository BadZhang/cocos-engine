/*
 Copyright (c) 2020-2023 Xiamen Yaji Software Co., Ltd.

 https://www.cocos.com/

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 of the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/

import { ILifecycle } from './i-lifecycle';
import { Constraint, RigidBody } from '../framework';
import { IVec3Like } from '../../core';

export interface IBaseConstraint extends ILifecycle {
    readonly impl: any;
    initialize (v: Constraint): void;
    setConnectedBody (v: RigidBody | null): void;
    setEnableCollision (v: boolean): void;
}

export interface IPointToPointConstraint extends IBaseConstraint {
    setPivotA (v: IVec3Like): void;
    setPivotB (v: IVec3Like): void;
}

export interface IHingeConstraint extends IBaseConstraint {
    setPivotA (v: IVec3Like): void;
    setPivotB (v: IVec3Like): void;
    setAxis (v: IVec3Like): void;
    setLimitEnabled(v: boolean): void;
    setLowerLimit(min: number): void;
    setUpperLimit(max: number): void;
    setMotorEnabled(v: boolean): void;
    setMotorVelocity (v: number): void;
    setMotorForceLimit (v: number): void;
}

export interface IFixedConstraint extends IBaseConstraint {
    setBreakForce(v: number): void;
    setBreakTorque(v: number): void;
}

export type IConeTwistConstraint = IBaseConstraint
